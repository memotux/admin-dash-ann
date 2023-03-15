// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['./modules/vuetify'],
  app: {
    head: {
      titleTemplate: '%s | TuxMin',
      meta: [{
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      { charset: "utf-8" }],
    }
  },
  css: ['@aws-amplify/ui-vue/styles.css'],
  imports: {
    dirs: ['./graphql', './data']
  },
  alias: {
    './runtimeConfig': './runtimeConfig.browser'
  },
  vite: {
    define: {
      'window.global': {}
    },
  },
})
