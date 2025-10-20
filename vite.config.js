import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ })
  ],
  // Automatically use correct base path:
  // - Development: '/' (for local testing)
  // - Production build: '/Khaldi-Abderrahmane-Portfiolio/' (for GitHub Pages)
  base: command === 'build' ? '/Khaldi-Abderrahmane-Portfiolio/' : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
}))
