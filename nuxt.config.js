module.exports = {
  head: {
    title: 'Sunway Innovators',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sunway Innovators' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Source+Sans+Pro' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },
  css: [
    // 'normalize.css',
    { src: '~/assets/theme.scss', lang: 'scss' }
  ],
  loading: {
    color: '#403F63'
  },
  build: {
    vendor: [
      'lodash'
    ],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    middleware: 'check-auth'
  },
  plugins: [
    '~/plugins/buefy.js'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
    // '@nuxtjs/google-analytics'
  ],
  axios: {
    baseURL: 'http://localhost:5000/api/v1',
    browserBaseURL: '/api/v1',
    credentials: true,
    debug: false,
    proxyHeaders: true
    // requestInterceptor: (config, { store }) => {
    //   if (store.state.token) {
    //     config.headers.common['Authorization'] = store.state.token
    //   }
    //   return config
    // }
  },
  proxy: [
    'http://localhost:5000/api/v1'
  ]
}
