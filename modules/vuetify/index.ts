import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import vitePlugin from 'vite-plugin-vuetify'

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
      config.plugins?.push(vitePlugin({ autoImport: true }))
    }
  },
  async setup(opts, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.build.transpile.push('vuetify')

    addPlugin(resolve('./plugins/vuetify.ts'))
  }
})
