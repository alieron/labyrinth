import { visit } from 'unist-util-visit';
import type { Root } from 'hast';
import { classnames } from 'hast-util-classnames';
import { fromHtml } from 'hast-util-from-html';
import { toText } from 'hast-util-to-text';
import { select } from 'hast-util-select';
import { h } from 'hastscript';
import { createCopyButton } from '../lib/hastCopyButton';
import { renderTikzToSVG } from '../lib/tikzjax';

// const tex2svg = tikzjax.default; // shows an error but works fine

export function rehypeTikzDiag() {
  return async (tree: Root) => {
    const replacements: {
      node: any;
      index: number;
      parent: any;
      newNode: any;
    }[] = [];

    visit(tree, 'element', (node, index, parent) => {
      if (
        node.tagName === 'pre' &&
        Array.isArray(node.children) &&
        node.children[0]?.type === 'element' &&
        node.children[0]?.tagName === 'code' &&
        node.children[0].properties?.lang === 'tikz'
      ) {
        const codeNode = node.children[0];
        const tikzText = toText(codeNode, { whitespace: 'pre' });

        replacements.push({ node, index: index!, parent, newNode: tikzText });
      }
    });

    for (const { parent, index, newNode: tikzText } of replacements) {
      try {
            const svg = (await renderTikzToSVG(tikzText)).replaceAll(/("#000"|"black")/g, `"currentColor"`);
        const tikzHast = fromHtml(svg, { fragment: true });

        const diagram = select('svg', tikzHast);
        if (diagram) {
          classnames(diagram, "stroke-foreground fill-foreground mx-auto overflow-visible");
        }

        const wrapper = h('div', {
          class: 'group relative rounded-md bg-muted h-fit',
        }, [
          createCopyButton(tikzText),
          h('div', {
            class: 'overflow-hidden',
          }, h('div', {
            class: 'p-4 overflow-x-auto',
            style: 'zoom:1.4;',
          }, diagram)
          ),
        ]);

        parent.children[index] = wrapper;
      } catch (err) {
        console.warn('TikZ render failed:', err);
      }
    }
  };
}