import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
// Math
import remarkMath from 'remark-math';
// Custom plugins
import { remarkTitle } from './src/plugins/title';
import { remarkHighlight } from './src/plugins/highlight';
import { remarkRemoveComments } from './src/plugins/comment';
import { remarkCodeBlocks, rehypeCodeBlocks } from './src/plugins/codeblock';
import { remarkJumpPoints, rehypeHeadings } from './src/plugins/heading';
import { remarkSplitParagraphs, rehypeTypography, rehypeCheckboxes } from './src/plugins/typography';
import { rehypeMdTable } from './src/plugins/table';
import { rehypeStaticMath } from './src/plugins/math';
import { rehypeTikzDiag } from './src/plugins/tikz';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      remarkTitle,
      remarkSplitParagraphs,
      remarkHighlight,
      remarkRemoveComments,
      remarkMath,
      remarkCodeBlocks,
      remarkJumpPoints,
    ],
    rehypePlugins: [
      rehypeTypography,
      rehypeMdTable,
      rehypeStaticMath,
      rehypeTikzDiag,
      rehypeCodeBlocks,
      rehypeHeadings,
      rehypeCheckboxes,
    ]
  },
  server: {
    port: 3000
  },
  vite: {
    plugins: [tailwindcss()]
  }
});