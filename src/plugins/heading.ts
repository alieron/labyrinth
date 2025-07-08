import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';

export function rehypeHeadings() {
  return (tree: Root) => {
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
    });
  };
}