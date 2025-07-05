import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
// Custom plugins
import { rehypeTypography } from './src/plugins/typography';
import { rehypeMdTable } from './src/plugins/table';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
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