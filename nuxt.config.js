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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro' }
    ]
  },
  css: [
    'normalize.css'
  ],
  loading: {
    color: '#3B8070'
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
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
    // '@nuxtjs/google-analytics'
  ],
  axios: {
    // baseURL: 'http://localhost:5000/api',
    // browserBaseURL: '/api',
    credentials: true,
    debug: true,
    proxyHeaders: true
  },
  proxy: [
    // Create server middleware to pass request from /api to http://localhost:5000/v1
    // pathRewrite changes /api to /v1
    ['/api', { target: 'http://localhost:5000', pathRewrite: { '^/api': '/v1' } }]
  ]
}
