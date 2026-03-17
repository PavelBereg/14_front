import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/vue-book-manager/' // Обязательно со слешами в начале и конце! Название репозитория
})