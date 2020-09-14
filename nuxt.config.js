
module.exports = {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'climateactioncarleton', name: 'climateactioncarleton', content: process.env.npm_package_description || '' },
      { hid: 'climate', name: 'climate', content: 'climate' },
      { hid: 'action', name: 'action', content: 'action' },
      { hid: 'carleton', name: 'carleton', content: 'carleton' },
      { hid: 'Climate Action Carleton', name: 'Climate Action Carleton', content: 'Climate Action Carleton' },
      { hid: 'Carleton University', name: 'Carleton University', content: 'Carleton University' },
      { hid: 'Carleton', name: 'Carleton', content: 'Carleton' },
      { hid: 'CarletonU', name: 'CarletonU', content: 'CarletonU' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:5000',
    GMAIL_ADDRESS: 'climateactioncarleton@gmail.com',

    GMAIL_OAUTH_CLIENT_ID: '469920243930-ejdem52q1v6t888cvklq2imekod7m7d9.apps.googleusercontent.com',// replace with client_id

    GMAIL_OAUTH_PROJECT_ID: 'climateactioncarleton',//replace with project_id

    GMAIL_OAUTH_CLIENT_SECRET: 'OrEEjkLaH9YVMOmTGBJaiwvl',// replace with client_secret

    GMAIL_OAUTH_REDIRECT_URL: 'https://climateactioncarleton.ca' // replace with the first element of redirect_uris
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/firebase.js',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-material-design-icons',
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true,
    baseUrl: "https://cac-nuxt.web.app"
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
