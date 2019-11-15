import axios from 'axios'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  server: {
    port: 3333, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3333'
  },
  head: {
    title: 'FAIR research software',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap' }
    ],
    script: [
      { src: '/js/lottie.js' },
    ]
  },

  router: {
    middleware: ['page-transitions']
  },

  transition: {
    name: 'page',
    mode: 'out-in'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // SCSS file in the project
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    proxyHeaders: false,
    credentials: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
          // if (ctx.isClient)
          // config.devtool = '#source-map'
    }
  },

  generate: {
    routes: () => [
      ...require('./static/json/pages.json').map(page => page.slug),
      ...require('./static/json/recommendations.json').map(rec => `/recommendations/${rec.slug}`),
    ]
  }
}
