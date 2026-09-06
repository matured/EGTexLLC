import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Must match the GitHub repo name so asset URLs resolve correctly on
  // https://<username>.github.io/EGTexLLC/. Change to '/' if this ever
  // moves to a custom domain or a <username>.github.io root repo.
  base: '/EGTexLLC/',
})
