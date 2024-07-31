import {defineConfig} from 'vite';
import React from '@vitejs/plugin-react-swc';
import {fileURLToPath} from 'node:url';

export default defineConfig({
  base:'/dist/',
  plugins: [React()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
