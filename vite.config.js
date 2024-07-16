import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://teuncm.github.io/breathing-meditation-aid/',
  plugins: [vue()],
})
