import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtModule({
  meta: {
    // Usually  npm package name of your module
    name: 'nuxt-vuetify',
    // The key in `nuxt.config` that holds your module options
    configKey: 'vuetify',
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options for your module
  defaults: {},
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins?.push(vuetify({ autoImport: true }))
    }
  },
  async setup(opts, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('./plugins/vuetify.ts'))
  }
})
