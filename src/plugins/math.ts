import { visit } from 'unist-util-visit';
import type { Root } from 'hast';
import { fromHtml } from 'hast-util-from-html';
import { classnames } from 'hast-util-classnames';
import { toText } from 'hast-util-to-text';
import { h } from 'hastscript';
import { createMathjaxRenderer } from '../lib/mathjax';
import { createCopyButton } from '../lib/hastCopyButton';

const renderer = createMathjaxRenderer();

export function rehypeStaticMath() {
  return (tree: Root) => {
    let hasMath = false;

    visit(tree, 'element', (node, index, parent) => {
      // for block math
      if (node.tagName === 'pre' && Array.isArray(node.children)) {
        const codeNode = node.children[0];
        if (
          !codeNode ||
          codeNode.type !== 'element' ||
          codeNode.tagName !== 'code' ||
          !(codeNode.properties.className as string | string[])?.includes('math-display')
        ) return;

        const latexText = toText(codeNode, { whitespace: 'pre' })

        renderer.register();
        hasMath = true;

        const latexHast = renderer.renderTexToHast(latexText, true);
        classnames(latexHast, 'text-[140%]');

        const wrapper = h('div', {
          class: 'group relative my-2 rounded-md overflow-hidden bg-muted text-sm font-mono',
        }, [
          createCopyButton(latexText),
          h('div', {
            class: 'overflow-x-auto mt-6 p-4',
          }, latexHast),
        ]);

        parent!.children.splice(index!, 1, wrapper);
      }

      // for inline math
      if (node.tagName === 'code' && parent?.type === 'element' && parent?.tagName !== 'pre') {
        const classes = Array.isArray(node.properties.className)
          ? node.properties.className
          : []
        if (!classes.includes('math-inline')) return;

        const latexText = toText(node, { whitespace: 'pre' })

        renderer.register();
        hasMath = true;

        const latexHast = renderer.renderTexToHast(latexText);
        classnames(latexHast, 'text-[110%]');

        const wrapper = h('span', {
          class: 'bg-muted px-1 py-0.5 rounded text-sm font-mono text-accent-foreground',
        }, latexHast
        );

        parent!.children.splice(index!, 1, wrapper);
      }

      // const classNames = node.properties.className as string ?? '';

      // if (!parent || !classNames.includes('math-inline') || !classNames.includes('math-display')) return;

      // if (!node.children?.[0] || node.children[0].type !== 'text') return;

      // const latex = node.children[0].value;
      // const display = node.tagName === 'div';

      // const html = renderMathToHtml(latex, display);
      // const [renderedNode] = fromHtml(html, { fragment: true }).children;

      // const wrapped = h(display ? 'div' : 'span', {
      //   class: `math-wrapper ${display ? 'block-math' : 'inline-math'}`
      // }, [
      //   h('code', { class: 'language-math inline-math bg-muted px-1 py-0.5 rounded text-sm font-mono text-accent-foreground' }, latex)
      // ]);

      // parent.children[index!] = wrapped;
    });


    if (hasMath) {
      // add mathjax chtml styles
      tree.children.push(renderer.getStyleSheet());
      renderer.unregister();
    }
  };
}