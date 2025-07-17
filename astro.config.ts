import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { BASE } from './src/utils/resolve';
// Math
import remarkMath from 'remark-math';
// Custom plugins
import { remarkTitle } from './src/plugins/title';
import { remarkNextPrev } from './src/plugins/next-prev';
import { remarkHighlight } from './src/plugins/highlight';
import { remarkRemoveComments } from './src/plugins/comment';
import { remarkCodeBlocks, rehypeCodeBlocks } from './src/plugins/codeblock';
import { remarkJumpPoints, rehypeHeadings } from './src/plugins/heading';
import { remarkSplitParagraphs, rehypeTypography, rehypeCheckboxes } from './src/plugins/typography';
import { rehypeMdTable } from './src/plugins/table';
import { rehypeStaticMath } from './src/plugins/math';
import { rehypeTikzDiag } from './src/plugins/tikz';
import { rehypeLinks } from './src/plugins/links';

// https://astro.build/config
export default defineConfig({
  site: 'https://alieron.github.io',
  base: BASE,
  build: {
    format: 'preserve',
  },
  integrations: [react()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      remarkTitle,
      remarkNextPrev,
      remarkSplitParagraphs,
      remarkHighlight,
      remarkRemoveComments,
      remarkMath,
      remarkCodeBlocks,
      remarkJumpPoints,
    ],
    rehypePlugins: [
      rehypeTypography,
      rehypeLinks,
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
