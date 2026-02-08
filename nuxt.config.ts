// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true, },

  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt', '@nuxt/content', '@nuxt/icon', '@nuxt/image', '@nuxtjs/google-fonts'],
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


  },
  image: {

    domains: ['images.unsplash.com'],
  },
  nitro: {
    preset: 'netlify',
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Israel Portfolio',
      short_name: 'Israel Dev',
      description: 'Portafolio Profesional de Josue Israel',
      theme_color: '#0f172a', // Tu color Navy 900
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: 'pwa-192-192.png', // Tienes que poner estos iconos en /public
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
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