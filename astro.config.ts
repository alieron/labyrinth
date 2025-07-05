import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
// Custom plugins
import { remarkHighlight } from './src/plugins/highlight';
import { rehypeTypography } from './src/plugins/typography';
import { rehypeMdTable } from './src/plugins/table';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    remarkPlugins: [
      remarkHighlight,
    ],
    rehypePlugins: [
      rehypeTypography,
      rehypeMdTable,
    ]
  },
  server: {
    port: 3000
  },
  vite: {
    plugins: [tailwindcss()]
  }
});