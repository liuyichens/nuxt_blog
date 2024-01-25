// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      theme: {
        light: 'vitesse-light',
        default: 'vitesse-light',
        dark: 'vitesse-dark'
      }
    }
  },
  css: [
      '~/assets/css/normalize.css',
      '~/assets/css/tailwind.css',
      '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
