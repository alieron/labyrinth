import type { Root } from 'hast';
import { selectAll } from 'hast-util-select';
import { classnames } from 'hast-util-classnames';

const classNameMap = {
  // Typography
  h1: 'text-foreground text-4xl font-bold mt-6 mb-4',
  h2: 'text-foreground text-3xl font-bold mt-5 mb-3',
  h3: 'text-foreground text-2xl font-semibold mt-4 mb-2',
  h4: 'text-foreground text-xl font-semibold mt-3 mb-2',
  h5: 'text-foreground text-lg font-medium mt-2 mb-1',
  h6: 'text-foreground text-base font-medium',
  p: 'leading-relaxed text-foreground',
  // Formatting
  strong: 'font-extrabold',
  em: 'italic',
  del: '',
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
  return (tree: Root) => {
    for (const [selector, className] of Object.entries(classNameMap)) {
      const elements = selectAll(selector, tree);
      for (const element of elements) {
        classnames(element, className);
      }
    }
  };
};