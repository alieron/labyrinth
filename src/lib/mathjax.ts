import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { CHTML } from 'mathjax-full/js/output/chtml.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js';
import type { LiteElement } from 'mathjax-full/js/adaptors/lite/Element';
import type { LiteText } from 'mathjax-full/js/adaptors/lite/Text';
import type { LiteDocument } from 'mathjax-full/js/adaptors/lite/Document';
import type { MathDocument } from 'mathjax-full/js/core/MathDocument';
import type { HTMLHandler } from 'mathjax-full/js/handlers/html/HTMLHandler';

import type { Element, Text } from 'hast';
import { h } from 'hastscript';


export function createMathjaxRenderer() {
  let document: MathDocument<LiteElement, LiteText, LiteDocument>;
  let handler: HTMLHandler<LiteElement | LiteText, LiteText, LiteDocument>;

  const tex = new TeX({ packages: AllPackages });
  const chtml = new CHTML({ fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2' }) as CHTML<LiteElement, LiteText, LiteDocument>;

  return {
    register() {
      // Setup MathJax with lite adaptor
      const adaptor = liteAdaptor();
      handler = RegisterHTMLHandler(adaptor);
      document = mathjax.document('', { InputJax: tex, OutputJax: chtml })
    },
    unregister() {
      mathjax.handlers.unregister(handler);
    },
    renderTexToHast(latex, display = false) {
      // convert LaTeX to HAST
      const node = document.convert(latex, { display }) as LiteElement;
      return fromLiteElement(node);
    },
    getStyleSheet() {
      const node = fromLiteElement(chtml.styleSheet(document))
      // do not render the `id` that mathjax suggests
      node.properties.id = undefined
      return node
    }
  }
}

function fromLiteElement(liteElement: LiteElement) {
  const children: (Element | Text)[] = []

  for (const node of liteElement.children) {
    children.push(
      'value' in node
        ? { type: 'text', value: node.value }
        : fromLiteElement(node)
    )
  }

  return h(liteElement.kind, liteElement.attributes, children);
}
