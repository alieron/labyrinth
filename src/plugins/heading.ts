import { visit } from 'unist-util-visit';
import type { Root as MDRoot, Text } from 'mdast';
import type { Root as HRoot, Element } from 'hast';
import { classnames } from 'hast-util-classnames';

export function remarkJumpPoints() {
  const pattern = /\^([a-zA-Z0-9_-]{6,})/g;

  return (tree: MDRoot) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || parent.type !== "paragraph" || !node.value.includes('^')) return;

      const newNodes: any[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = pattern.exec(node.value)) !== null) {
        const [fullMatch, id] = match;
        const start = match.index;
        const end = match.index + fullMatch.length;

        if (start > lastIndex) {
          newNodes.push({ type: 'text', value: node.value.slice(lastIndex, start) });
        }

        newNodes.push({
          type: 'html',
          value: `<span id="^${id}" class="scroll-mt-33" aria-hidden="true"/>`,
        });

        lastIndex = end;
      }

      if (lastIndex < node.value.length) {
        newNodes.push({ type: 'text', value: node.value.slice(lastIndex) });
      }

      parent.children.splice(index!, 1, ...newNodes);
    });
  };
}

export function rehypeHeadings() {
  return (tree: HRoot) => {
    visit(tree, 'element', (node: Element) => {
      if (!['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) return;

      const text = node.children
        .filter(child => child.type === 'text' || child.type === 'element')
        .map(child => {
          if (child.type === 'text') return child.value;
          if (child.type === 'element' && 'children' in child) {
            return child.children
              .filter(c => c.type === 'text') // not fully recursive
              .map(c => (c as any).value)
              .join('');
          }
          return '';
        })
        .join('')
        .trim();

      // lowercase, hyphens instead of space
      const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');

      node.properties = {
        ...node.properties,
        id: slug, // only unique if the heading text is unique, same behaviour in obsidian
      };

      classnames(node, 'scroll-mt-32');
    });
  };
}