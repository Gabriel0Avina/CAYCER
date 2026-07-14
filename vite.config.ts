import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    // react-helmet-async es CommonJS; empaquetarlo en el bundle SSR evita
    // errores de named exports al importarlo desde Node (prerender.mjs).
    noExternal: ['react-helmet-async'],
  },
})
