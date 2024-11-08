import { defineConfig } from 'vite'
// import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import mkcert from 'vite-plugin-mkcert'
import fs from 'node:fs'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    mkcert(),
    react(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  server: {
    host:'dev12.pulse.social',
    port: 8080,
    https: {
      key: fs.readFileSync('certs/key.pem'),
      cert: fs.readFileSync('certs/cert.pem')
    }
  }
})
