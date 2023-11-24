import { defineConfig } from 'vite'
import autoprefixer from "autoprefixer";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  return {
    plugins: [vue()],
    base: (command === "serve" ? "" : "/vue_practice_01"),
    server: {
      port: 5173,
      watch: {
        usePolling: true
      }
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  }
})
