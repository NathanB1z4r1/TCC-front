



export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FrontTCCGerenciadorCompetencias',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/layouts/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  //   // https://go.nuxtjs.dev/axios
  //   '@nuxtjs/axios',
  // ],

  modules: [
    'primevue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // "@nuxtjs/google-fonts"
  ],

  primevue:{
    theme: "saga-orange",
    ripple: false,
    components: [
      "Button",
      "Sidebar",
      "Dropdown",
      "InputMask",
      "Textarea",
      "Card"
    ]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  auth:{
    strategies:{
      local:{
        endpoints:{
          login:{
            url: 'http://localhost:8000/api/v1/auth/token/login/',
            method: "post",
            propertyName: "auth_token"
          },
          logout:{
            url: 'http://localhost:8000/api/v1/auth/token/logout/',
            method: "post",
            propertyName: "auth_token"
          },
          user:{
            url: 'http://localhost:8000/api/v1/users/me/',
            method: "get",
            propertyName: false
          },
        },
        tokenType: "Token",
        tokenName: "Authorization",
      }
    },
    redirect:{
      login: "/",
      home: "/home"
    }
  },
}
