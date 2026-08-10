import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // en un monorepo real cada remote tendría su propio build + Module Federation 2.0
    rollupOptions: {
      input: {
        shell: 'index.html',
      },
    },
  },
})
