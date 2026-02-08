// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/icon'],
  app: {
    head: {
      title: 'Tu Nombre | Frontend Developer & Docente',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portafolio profesional de desarrollo web y docencia tecnológica.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    // Transiciones nativas suaves entre páginas
    pageTransition: { name: 'page', mode: 'out-in' }
  },

})