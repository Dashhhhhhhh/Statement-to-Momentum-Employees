import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub project Pages lives at /<repo-name>/; set GITHUB_PAGES_BASE in CI.
const base = process.env.GITHUB_PAGES_BASE ?? '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base.endsWith('/') ? base : `${base}/`,
})
