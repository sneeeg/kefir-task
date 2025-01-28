export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru-RU'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'NFT Marketplace' },
        { name: 'application-name', content: 'NFT Marketplace' },
        { name: 'msapplication-TileColor', content: '#2b5797' },
        { property: 'og:site_name', content: 'NFT Marketplace' },
        { name: 'theme-color', content: '#09101d' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
      ],
      link: [
        { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#2b5797' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      ],
    }
  },

  compatibilityDate: '2025-01-24',
  devtools: { enabled: false },

  css: [
    "~/assets/style/font.scss",
    "~/assets/style/main.scss",
  ],

  routeRules: {
    '/' : { swr: true },
    '/contacts': { prerender: true },
  },

  modules: ['@pinia/nuxt']
})