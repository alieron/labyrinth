import { visit } from 'unist-util-visit';
import type { Html, Root, Text } from 'mdast';

export function remarkRemoveComments() {
  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || typeof node.value !== 'string') return;

      const matches = [...node.value.matchAll(/%%(.*?)%%/gs)];

      if (matches.length === 0) return;

      const newNodes: (Text | Html)[] = [];
      let lastIndex = 0;

      for (const match of matches) {
        const [fullMatch, commentText] = match;
        const start = match.index!;
        const end = start + fullMatch.length;

        if (start > lastIndex) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex, start),
          });
        }

        // HTML comment
        newNodes.push({
          type: 'html',
          value: `<!--${commentText.trim()}-->`,
        });

        lastIndex = end;
      }

      if (lastIndex < node.value.length) {
        newNodes.push({
          type: 'text',
          value: node.value.slice(lastIndex),
        });
      }

      parent.children.splice(index!, 1, ...newNodes);
    });
  };
};
