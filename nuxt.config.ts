// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/icon', '@nuxt/image', '@nuxtjs/google-fonts'],
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
    pageTransition: { name: 'page', mode: 'out-in' },


  }, scm- history - item: /home/israelmerlyn / Documentos / Proyectos % 20Personales / portfolio - profesional ?% 7B % 22repositoryId % 22 % 3A % 22scm0 % 22 % 2C % 22historyItemId % 22 % 3A % 229d58c490f7b4909f72f011ba4295594639b375e8 % 22 % 2C % 22historyItemParentId % 22 % 3A % 2222db9ad320b0868ffe2c07acd648a7e951807d5a % 22 % 2C % 22historyItemDisplayId % 22 % 3A % 229d58c49 % 22 % 7D
  image: {

  domains: ['images.unsplash.com'],
},
  nitro: {
  preset: 'netlify',
},
  googleFonts: {
  families: {
    'Inter': [400, 500, 700],
    'JetBrains+Mono': [400],
  },
  display: 'swap',
  prefetch: true,
  preconnect: true,
}


})