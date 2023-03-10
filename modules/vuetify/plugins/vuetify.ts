import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import { genColors } from "./colors";

const darkColors = genColors('dark')
const lightColors = genColors('light')

const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
  ssr: true,
  components: {
    VDataTable,
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: darkColors['primary-400'],
          secondary: darkColors['secondary-300'],
          neutral: darkColors['grey-500'],
          background: darkColors['primary-600'],
          ...darkColors
        }
      },
      light: {
        colors: {
          primary: lightColors['grey-50'],
          secondary: lightColors['secondary-600'],
          neutral: lightColors['grey-500'],
          background: lightColors['grey-0'],
          ...lightColors
        }
      }
    }
  },
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuetify)
})
