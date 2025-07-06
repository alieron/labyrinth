import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
// Custom plugins
import { remarkTitle } from './src/plugins/title';
import { remarkHighlight } from './src/plugins/highlight';
import { remarkRemoveComments } from './src/plugins/comment';
import { remarkCodeBlocks, rehypeCodeBlocks } from './src/plugins/codeblock';
import { rehypeTypography } from './src/plugins/typography';
import { rehypeMdTable } from './src/plugins/table';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      remarkTitle,
      remarkHighlight,
      remarkRemoveComments,
      remarkCodeBlocks,
    ],
    rehypePlugins: [
      rehypeTypography,
      rehypeMdTable,
      rehypeCodeBlocks,
    ]
  },
  server: {
    port: 3000
  },
  vite: {
    plugins: [tailwindcss()]
  }
});