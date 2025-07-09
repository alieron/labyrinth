import { visit } from 'unist-util-visit';
import type { Root as MDRoot, PhrasingContent } from 'mdast';
import { u } from 'unist-builder';
import type { Root as HRoot } from 'hast';
import { selectAll } from 'hast-util-select';
import { classnames } from 'hast-util-classnames';

export function remarkSplitParagraphs() {
  return (tree: MDRoot) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      const newChildren: PhrasingContent[] = [];
      node.children.forEach((child) => {
        if (child.type === 'text') {
          const parts = child.value.split('\n');
          parts.forEach((part, i) => {
            if (i > 0) {
              newChildren.push(u('break'));
            }
            newChildren.push(u('text', part));
          });
        } else {
          newChildren.push(child);
        }
      });
      node.children = newChildren;
    });
  };
}

const classNameMap = {
  // Typography
  h1: 'text-foreground text-4xl font-bold mt-3',
  h2: 'text-foreground text-3xl font-bold mt-3',
  h3: 'text-foreground text-2xl font-semibold mt-3',
  h4: 'text-foreground text-xl font-semibold mt-3',
  h5: 'text-foreground text-lg font-medium mt-3',
  h6: 'text-foreground font-medium mt-3',
  p: 'leading-relaxed text-foreground',
  // Formatting
  strong: 'font-extrabold',
  em: 'italic',
  del: '',
  mark: 'bg-yellow-300/30 px-1 text-foreground rounded-xs',
  // Links
  a: 'text-primary underline hover:text-primary/80',
  // Lists
  ol: 'list-decimal pl-8 my-3 space-y-1 text-foreground marker:text-muted-foreground',
  ul: 'list-disc pl-8 my-3 space-y-1 text-foreground marker:text-muted-foreground',
  li: 'leading-snug',
  // Blockquotes
  blockquote: 'border-l-4 border-primary bg-muted pl-4 pr-2 py-2 italic text-muted-foreground mb-4',
  // Breaks
  hr: 'my-6 border-border',
  br: '',
};

export function rehypeTypography() {
  return (tree: HRoot) => {
    for (const [selector, className] of Object.entries(classNameMap)) {
      const elements = selectAll(selector, tree);
      for (const element of elements) {
        classnames(element, className);
      }
    }
  };
};