export default {
  ssr: false,

  head: {
    title: "rigma's lair",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal homepage on the web of rigma' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Gelasio:wght@400;700&family=JetBrains+Mono&family=Lato&display=swap'
      }
    ]
  },

  loading: { color: '#fff' },
  css: [],
  plugins: [],

  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxt/content'
  ],

  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}