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

      // base link style
      node.properties.className = 'text-primary underline hover:text-primary-80';

      const isExternal = /^https?:\/\//.test(href);

      // external links 
      if (isExternal) {
        // append external icon
        node.children.push(
          // Check icon https://lucide.dev/icons/external-link
          h('svg', {
            class: 'lucide lucide-external-link-icon lucide-external-link ml-1 inline w-4 h-4',
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            fill: 'none',
            stroke: "currentColor",
            'stroke-width': "2",
            'stroke-linecap': "round",
            'stroke-linejoin': "round",
            viewBox: '0 0 24 24',
          }, [
            h('path', {
              d: "M15 3h6v6",
            }),
            h('path', {
              d: "M10 14 21 3",
            }),
            h('path', {
              d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            }),
          ])
        );
      }
    });
  };
}

