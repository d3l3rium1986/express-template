const webpack = require('webpack')
const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/app.scss', lang: 'scss' },
    { src: 'bootstrap-vue/dist/bootstrap-vue.css' },
  ],
  plugins: [
    { src: '~plugins/plugins' },
    { src: '~plugins/plugins-ssr', ssr: false }
  ],
  modules: [
    'nuxt-trailingslash-module'
  ],
  render: {
    gzip: { threshold: 150, level: 6 }
  },
  /*
  ** Add axios globally
  */
  build: {
    babel: {
      presets: ['vue-app']
    },
    vendor: [
      'axios',
      'babel-polyfill'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        Popper: ['popper.js', 'default']
        // '_': 'lodash'
      }),
      new webpack.ContextReplacementPlugin(
        /moment[\/\\]locale$/,
        /en-gb/
      )
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      config.module.rules.splice(0, 0, {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'), // white-list your app source files
          require.resolve('bootstrap-vue') // white-list bootstrap-vue
        ],
        loader: 'babel-loader'
      })
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
