import { visit } from 'unist-util-visit';
import type { Root, Link } from 'mdast';
import { toString } from 'mdast-util-to-string';

// adds the links to the next and previous notes to frontmatter
export function remarkNextPrev() {
  return function (tree: Root, file) {
    visit(tree, 'link', (node: Link, index, parent) => {
      if (!parent) return;

      if (toString(node) === 'Previous') {
        file.data.astro.frontmatter.prev = node.url;
        parent.children.splice(index!, 1);
      }

      if (toString(node) === 'Next') {
        file.data.astro.frontmatter.next = node.url;
        parent.children.splice(index!, 1);
      }
    });
  }
}