import { visit } from 'unist-util-visit';
import type { Root, Text } from 'mdast';

export function remarkHighlight() {
  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || typeof node.value !== 'string') return;

      const text = node.value;
      const parts = text.split(/(==[^=]+==)/g);

      if (parts.length === 1) return; // no highlights

      const newNodes: Text[] = parts.map((part) => {
        const match = part.match(/^==(.+)==$/);
        if (match) {
          return {
            type: 'text',
            value: match[1],
            data: {
              hName: 'mark',
            },
          };
        } else {
          return { type: 'text', value: part };
        }
      });

      parent.children.splice(index!, 1, ...newNodes);
    });
  };
};
