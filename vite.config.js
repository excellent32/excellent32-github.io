import {defineConfig} from 'vite';
import React from '@vitejs/plugin-react';
import {fileURLToPath} from 'node:url';

export default defineConfig({
  plugins: [React({include: /\.(mdx|js|jsx|ts|tsx)$/})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
