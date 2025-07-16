import { visit } from 'unist-util-visit';
import type { Root } from 'hast';
import { h } from 'hastscript';

export function rehypeLinks() {
  return (tree: Root) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'a') return;

      const href = node.properties?.href as string | undefined;

      // disabled links
      if (!href || href === '#') {
        node.properties.className = 'text-muted-foreground underline hover:text-muted-foreground/80';
        node.properties.title = 'This note was not published';
        delete node.properties.href;
        return;
      }
    });
  };
}

