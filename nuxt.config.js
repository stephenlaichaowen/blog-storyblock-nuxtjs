
export default {
  mode: 'universal',

  head: {
    title: 'My Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An awesome blog about tech stuff, built with Nuxt and Storyblock' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '~assets/css/main.css'
  ],

  transition: {
    name: 'fade',
    mode: 'out-in',
  },

  plugins: [
  ],

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['storyblok-nuxt', {
      accessToken: 'rXxwm8UWr6Qyr1Qp2mEsTAtt',
      cacheProvider: 'memory'
    }]
  ],

  axios: {
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  build: {
    extend (config, ctx) {
    }
  }
}
