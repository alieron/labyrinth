import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      '@labyrinth/notes': path.resolve(__dirname, '../notes/dist')
    },
  },
});