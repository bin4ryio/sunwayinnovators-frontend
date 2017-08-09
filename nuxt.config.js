module.exports = {
  /*
  ** Headers of the page
  */
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
    'normalize.css',
    { src: '../assets/theme.less', lang: 'less' }
  ],
  loading: {
    color: '#3B8070'
  },
  build: {
    vendor: [
      'es6-promise',
      'isomorphic-fetch',
      'iview',
      'lodash'
    ],
    // Run ESLINT on save
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
    { src: '~/plugins/iview.js' }
  ]
}
