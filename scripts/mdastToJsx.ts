import { Root, RootContent } from 'mdast';

function escapeHtml(str: string) {
  return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function renderNode(node: RootContent): string {
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

      return `<h${level} className="${sizeClass}">${node.children.map(renderNode).join('')}</h${level}>`;
    }

    case 'paragraph':
      return `<p>${node.children.map(renderNode).join('')}</p>`;

    case 'strong':
      return `<strong>${node.children.map(renderNode).join('')}</strong>`;

    case 'emphasis':
      return `<em>${node.children.map(renderNode).join('')}</em>`;

    case 'inlineCode':
      return `<code>${escapeHtml(node.value)}</code>`;

    case 'code':
      return `<pre><code>${escapeHtml(node.value)}</code></pre>`;

    case 'blockquote':
      return `<blockquote>${node.children.map(renderNode).join('')}</blockquote>`;

    case 'list':
      const ListTag = node.ordered ? 'ol' : 'ul';
      return `<${ListTag}>${node.children.map(renderNode).join('')}</${ListTag}>`;

    case 'listItem':
      return `<li>${node.children.map(renderNode).join('')}</li>`;

    case 'link':
      return `<a className="text-blue-600 underline" href="${node.url}">${node.children.map(renderNode).join('')}</a>`;

    case 'text':
      return escapeHtml(node.value);

    case 'html':
      return node.value;

    case 'thematicBreak':
      return `<hr />`;

    case 'break':
      return `<br />`;

    default:
      console.warn(`Unhandled node type: ${node.type}`);
      return '';
  }
}

export function toJsx(tree: Root): string {
  return tree.children.map(renderNode).join('\n');
}