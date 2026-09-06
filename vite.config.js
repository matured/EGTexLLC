import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from the egtexllc.com custom domain root (see public/CNAME),
  // not a GitHub Pages project subpath, so base must be '/'.
  base: '/',
})
