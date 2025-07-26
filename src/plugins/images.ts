import { visit } from 'unist-util-visit';
import type { Root, PhrasingContent, Text, Image } from 'mdast';

export function remarkEmbedImages() {
  const pattern = /!\[\[([^|\]]+)(?:\|(\d*)(?:x(\d*))?)?\]\]/g;

  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent) return;

      const newNodes: PhrasingContent[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = pattern.exec(node.value)) !== null) {
        const [fullMatch, filename, widthStr, heightStr] = match;
        const start = match.index;
        const end = match.index + fullMatch.length;

        if (start > lastIndex) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex, start),
          } satisfies Text);
        }

        // Create image node
        const width = widthStr ? parseInt(widthStr, 10) : undefined;
        const height = heightStr ? parseInt(heightStr, 10) : undefined;

        newNodes.push({
          type: 'image',
          url: `/labyrinth/assets/${filename}`,
          alt: filename,
          data: {
            hProperties: {
              class: 'mx-auto object-fill',
              style: `${width ? `width:${width}px;${height ? `aspect-ratio:${width}/${height}` : ''}` : ''}`
            },
          },
        } satisfies Image);

        lastIndex = end;
      }

      if (lastIndex < node.value.length) {
        newNodes.push({
          type: 'text',
          value: node.value.slice(lastIndex),
        } satisfies Text);
      }

      parent.children.splice(index!, 1, ...newNodes);
    });
  };
}