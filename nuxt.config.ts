// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from 'unplugin-element-plus/vite'

export default defineNuxtConfig({
  srcDir: 'src/',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  tailwindcss: {
    cssPath: '@/assets/styles/tailwind.css',
  },
  build: {
    transpile: ['element-plus/es']
  },
  vite: {
    plugins: [ElementPlus({useSource: true})],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/default.scss" as *;`
        }
      }
    }
  },
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/tailwindcss']
})
