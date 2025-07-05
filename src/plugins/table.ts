import { visit } from 'unist-util-visit';
import type { Element, Root } from 'hast';

export function rehypeMdTable() {
  return (tree: Root) => {
    visit(tree, 'element', (node, index, parent) => {
      // 1. Wrap <table> with a div
      if (node.tagName === 'table' && parent && index) {
        // Add base table classes
        node.properties ??= {};
        node.properties.className = [
          'table-auto',
          'border-collapse',
          'w-fit',
          'my-2',
        ];

        // Wrap with overflow div
        const wrapper: Element = {
          type: 'element',
          tagName: 'div',
          properties: {
            className: 'overflow-x-auto',
          },
          children: [node],
        };

        parent.children[index] = wrapper;
      }

      // 2. Style thead
      if (node.tagName === 'thead') {
        node.properties ??= {};
        node.properties.className = 'font-extrabold';
      }

      // 3. Style tr
      if (node.tagName === 'tr') {
        node.properties ??= {};
        node.properties.className = '';
      }

      // 4. Style td and align based on data-align
      if (node.tagName === 'td' || node.tagName === 'th') {
        node.properties ??= {};

        const align = node.properties.align as string | undefined;

        const textAlign = align === 'center'
          ? 'text-center'
          : align === 'right'
            ? 'text-right'
            : 'text-left';

        node.properties.className = [
          'border',
          'px-4',
          'py-2',
          'align-top',
          textAlign,
        ];

        node.properties.align = null;
      }
    });
  };
}