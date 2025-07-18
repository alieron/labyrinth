import { visit } from 'unist-util-visit';
import type { Root as MDRoot } from 'mdast';
import type { Root as HRoot, Element } from 'hast';
import { classnames } from 'hast-util-classnames';
import { fromHtml } from 'hast-util-from-html';
import { select } from 'hast-util-select';
import { h } from 'hastscript';
import { createHighlighter } from 'shiki';
import { createCopyButton } from '../lib/hastCopyButton';

export function remarkCodeBlocks() {
  return (tree: MDRoot) => {
    visit(tree, 'code', (node, index, parent) => {
      node.data = {
        hProperties: {
          lang: node.lang,
        },
      };
    });
  };
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const highlighter = await createHighlighter({
  themes: ['one-dark-pro'],
  langs: ['js', 'ts', 'java', 'matlab', 'cpp', 'python', 'latex']
});

const langAlias = {
  'octave': 'matlab',
  'tikz': 'latex', // fallback
}

export function rehypeCodeBlocks() {
  return (tree: HRoot) => {
    visit(tree, 'element', (node, index, parent) => {
      // for block code <pre><code>...</code></pre>
      if (node.tagName === 'pre' && Array.isArray(node.children)) {

        const codeNode = node.children[0];
        if (
          !codeNode ||
          codeNode.type !== 'element' ||
          codeNode.tagName !== 'code'
        ) return;

        const lang = codeNode.properties?.lang as string | undefined;

        const codeText = codeNode.children
          .filter((n) => n.type === 'text')
          .map((n) => n.value)
          .join('');

        const html = highlighter.codeToHtml(
          codeText,
          {
            lang: lang ? langAlias[lang] || lang : 'plaintext', // check for entry in langAlias
            theme: 'one-dark-pro',
            // colorReplacements: {
            //   '#282c34': '#1d1d1d'
            // }
          }
        );

        const codeHast = fromHtml(html, { fragment: true });

        // remove the style prop from <pre>, to remove shiki's background
        const highlighted = select('pre', codeHast) as Element | null;
        if (highlighted && highlighted.properties?.style) {
          delete highlighted.properties.style;
          classnames(highlighted, 'overflow-x-auto p-4');
        }

        const wrapper = h('div', {
          class: 'group relative rounded-md overflow-hidden bg-muted text-sm font-mono',
        }, [
          h('span', {
            class: 'absolute top-2 left-2 text-accent-foreground',
          }, lang), // display the user's chosen lang
          createCopyButton(codeText),
          h('div', {
            class: 'overflow-hidden mt-6'
          }, highlighted),
        ]);

        parent!.children[index!] = wrapper;
      }

      // for inline code
      if (node.tagName === 'code' && parent?.type === 'element' && parent?.tagName !== 'pre') {
        classnames(node, 'bg-muted px-1 py-0.5 rounded text-sm font-mono text-accent-foreground');
      }
    });
  };
}