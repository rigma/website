export default {
  target: 'static',
  ssr: false,

  head: {
    title: "rigma's lair",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal homepage on the web of rigma' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Gelasio:wght@400;700&family=JetBrains+Mono&family=Lato:wght@400;700&display=swap'
      }
    ]
  },

  loading: { color: '#fff' },
  components: true,
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  router: {
    middleware: ['i18n']
  },
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/vue-i18n.js'
  ],

  buildModules: [
    '@nuxtjs/router-extras'
  ],
  modules: [
    '@nuxt/content'
  ],

  content: {
    liveEdit: false
  },

  build: {
    extend (config, ctx) {
      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: '@kazupon/vue-i18n-loader'
      })
    }
  },
  generate: {
    fallback: 'error.html',
    routes: [
      '/fr',
      '/fr/resume'
    ]
  }
}
