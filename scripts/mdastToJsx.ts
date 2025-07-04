import React, { createElement } from 'react';
import { LinkProps } from 'react-router-dom';
import { Root, RootContent } from 'mdast';
import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
  themes: ['one-dark-pro'],
  langs: ['js', 'ts', 'java', 'matlab', 'cpp', 'python', 'latex']
});

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toJsxSource(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return node.toString();
  }
  if (!React.isValidElement(node)) return '';

  const { type, props } = node;
  const children = React.Children.toArray(props.children || []).map(child =>
    toJsxSource(child)
  );
  const childrenStr = children.join('');

  if (type === React.Fragment) return childrenStr;

  const tag = typeof type === 'string' ? type : (type as any).name || 'Component';

  const propsString = Object.entries(props)
    .filter(([key]) => key !== 'children')
    .map(([key, value]) => {
      if (typeof value === 'string') return `${key}="${value}"`;
      if (typeof value === 'boolean') return value ? key : '';
      return `${key}={${JSON.stringify(value)}}`;
    })
    .filter(Boolean)
    .join(' ');

  const propsPart = propsString ? ' ' + propsString : '';

  if (children.length === 0) {
    return `<${tag}${propsPart} />`;
  }

  return `<${tag}${propsPart}>${childrenStr}</${tag}>`;
}

function renderNode(node: RootContent): React.ReactNode {
  switch (node.type) {
    case 'heading': {
      const level = node.depth;
      const sizeClass = {
        1: 'text-4xl font-bold mt-6 mb-4',
        2: 'text-3xl font-bold mt-5 mb-3',
        3: 'text-2xl font-semibold mt-4 mb-2',
        4: 'text-xl font-semibold mt-3 mb-2',
        5: 'text-lg font-medium mt-2 mb-1',
        6: 'text-base font-medium',
      }[level] ?? 'text-base';

      return createElement(`h${level}`, { className: `${sizeClass} text-foreground` }, ...node.children.map(renderNode));
    }

    case 'paragraph':
      return createElement('p', { className: 'leading-relaxed text-foreground' }, ...node.children.map(renderNode));

    case 'strong':
      return createElement('strong', { className: 'font-bold text-foreground' }, ...node.children.map(renderNode));

    case 'emphasis':
      return createElement('em', { className: 'italic text-foreground' }, ...node.children.map(renderNode));

    case 'delete':
      return createElement('del', null, ...node.children.map(renderNode));

    case 'inlineCode':
      return createElement(
        'code',
        { className: 'bg-muted px-1 py-0.5 rounded text-sm font-mono text-accent-foreground' },
        node.value
      );

    case 'code':
      const lang = node.lang === "octave" ? "matlab" : node.lang

      const html = highlighter.codeToHtml(
        node.value,
        {
          lang: lang || 'plaintext',
          theme: 'one-dark-pro',
          colorReplacements: {
            '#282c34': '#1d1d1d'
          }
        }
      );

      return createElement(
        'NoteComponents.CodeBlock',
        { html: escapeHtml(html), lang: node.lang, code: escapeHtml(node.value) }
      );

    case 'blockquote':
      return createElement(
        'blockquote',
        { className: 'border-l-4 border-primary bg-muted pl-4 pr-2 py-2 italic text-muted-foreground mb-4' },
        ...node.children.map(renderNode)
      );

    case 'list':
      const listTag = node.ordered ? 'ol' : 'ul';
      return createElement(
        listTag,
        {
          className: `${node.ordered ? 'list-decimal' : 'list-disc'
            } pl-8 my-3 space-y-1 text-foreground marker:text-muted-foreground`,
        },
        ...node.children.map(renderNode)
      );

    case 'listItem':
      return createElement('li', { className: 'leading-snug' }, ...node.children.map(renderNode));

    case 'link':
      return createElement<LinkProps, HTMLElement>(
        "NoteComponents.GenericLink",
        { to: node.url },
        ...node.children.map(renderNode)
      );

    case 'table':
      return createElement(
        'div',
        { className: 'overflow-x-auto' },
        createElement(
          'table',
          { className: 'table-auto border-collapse w-fit my-2' },
          // Header Row
          createElement(
            'thead',
            { className: 'font-bold' },
            createElement(
              'tr',
              null,
              ...node.children[0].children.map((cell, idx) =>
                createElement(
                  'td',
                  { className: `border px-4 py-2 text-${node.align?.at(idx) || 'left'} align-top` },
                  ...cell.children.map(renderNode)
                )
              )
            )
          ),
          // Remaining Rows
          createElement(
            'tbody',
            null,
            ...node.children.slice(1).map((row) =>
              createElement(
                'tr',
                null,
                ...row.children.map((cell, idx) =>
                  createElement(
                    'td',
                    { className: `border px-4 py-2 text-${node.align?.at(idx) || 'left'} align-top` },
                    ...cell.children.map(renderNode)
                  )
                )
              )
            )
          )
        )
      );

    // case 'tableRow':
    //   return createElement(
    //     'tr',
    //     { className: 'border-b border-muted-foreground' },
    //     ...node.children.map(renderNode)
    //   );


    // case 'tableCell':
    //   return createElement(
    //     'td',
    //     {
    //       className: 'border px-4 py-2 text-left align-top',
    //     },
    //     ...node.children.map(renderNode)
    //   );

    case 'text':
      return escapeHtml(node.value);

    case 'html':
      return node.value; // use with caution — unsafe HTML

    case 'thematicBreak':
      return createElement('hr', { className: 'my-6 border-border' });

    case 'break':
      return createElement('br');

    default:
      console.warn(`Unhandled node type: ${node.type}`);
      return null;
  }
}

function renderNodes(nodes: RootContent[]): React.ReactNode {
  const children = nodes
    .flatMap(renderNode)
    .filter(x => x != null);

  return React.createElement(React.Fragment, null, ...children);
}

export function toHTML(tree: Root): string {
  const jsx = renderNodes(tree.children);
  return toJsxSource(jsx);
}
