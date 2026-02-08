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
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'icon', type: 'image/png', href: '/pwa192x192.png' }
      ]
    },
    // Transiciones nativas suaves entre páginas
    pageTransition: { name: 'page', mode: 'out-in' },


  },
  image: {
    // provider: 'ipx',
    domains: ['images.unsplash.com'],
  },
  nitro: {
    preset: 'netlify-static',
  },
  pwa: {
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    manifestFilename: 'manifest.webmanifest',
    injectRegister: 'auto',
    manifest: {
      name: 'Israel Portfolio',
      short_name: 'Israel Dev',
      description: 'Portafolio Profesional de Josue Israel',
      theme_color: '#0f172a', // Tu color Navy 900
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      id: '/',
      icons: [
        {
          src: '/pwa192x192.png', // Tienes que poner estos iconos en /public
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/pwa512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
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