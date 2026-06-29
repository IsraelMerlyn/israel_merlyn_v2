// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],

  css: [
    '~~/assets/css/main.css',
    '~~/assets/css/animations.css'
  ],

  app: {
    pageTransition: { name: 'blur', mode: 'out-in' },
    layoutTransition: { name: 'blur', mode: 'out-in' },
    head: {
      title: 'Josue Israel Vázquez | SSr Software Engineer · Flutter & Vue 3',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portafolio de Josue Israel Vázquez, SSr Software Engineer y Tech Lead. Especialista en Flutter, Vue 3, Nuxt 3 y Spring Boot.' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://portafolio-israelmerlyn.netlify.app/' },
        { property: 'og:title', content: 'Josue Israel Vázquez | SSr Software Engineer · Flutter & Vue 3' },
        { property: 'og:description', content: 'Portafolio de Josue Israel Vázquez, SSr Software Engineer y Tech Lead. Especialista en Flutter, Vue 3, Nuxt 3 y Spring Boot.' },
        { property: 'og:image', content: 'https://portafolio-israelmerlyn.netlify.app/home.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://portafolio-israelmerlyn.netlify.app/' },
        { name: 'twitter:title', content: 'Josue Israel Vázquez | SSr Software Engineer · Flutter & Vue 3' },
        { name: 'twitter:description', content: 'Portafolio de Josue Israel Vázquez, SSr Software Engineer y Tech Lead. Especialista en Flutter, Vue 3, Nuxt 3 y Spring Boot.' },
        { name: 'twitter:image', content: 'https://portafolio-israelmerlyn.netlify.app/home.png' }
      ],
      link: [
        { rel: 'canonical', href: 'https://portafolio-israelmerlyn.netlify.app/' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'icon', type: 'image/png', href: '/pwa192x192.png' },
        { rel: 'apple-touch-icon', href: '/pwa192x192.png' }
      ]
    }
  },

  image: {
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
      name: 'Josue Israel Portfolio',
      short_name: 'Israel Dev',
      description: 'Portafolio Profesional de Josue Israel Vázquez',
      theme_color: '#0A0F1E',
      background_color: '#0A0F1E',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      id: '/',
      icons: [
        {
          src: '/pwa192x192.png',
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
    preload: true,
    download: true,
  }
})