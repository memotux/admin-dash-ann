<script setup lang="ts">
import { useTheme } from 'vuetify'

const items = [
  { title: 'Dashboard', prependIcon: 'mdi:mdi-view-dashboard', to: '/' },
  { title: 'Data', type: 'subheader' },
  { title: 'Manage Team', prependIcon: 'fa-solid fa-people-group', to: '/team' },
  { title: 'Contacts', prependIcon: 'fa-solid fa-address-book', to: '/contacts' },
  { title: 'Invoices Balances', prependIcon: 'fa-solid fa-file-invoice', to: '/invoices' },
  { title: 'Pages', type: 'subheader' },
  { title: 'Profile Form', prependIcon: 'fa-solid fa-user', to: '/form' },
  { title: 'Calendar', prependIcon: 'fa-regular fa-calendar-days', to: '/calendar' },
  { title: 'FAQ Page', prependIcon: 'fa-solid fa-clipboard-question', to: '/faq' },
  { title: 'Charts', type: 'subheader' },
  { title: 'Bar Chart', prependIcon: 'fa-regular fa-chart-bar', to: '/bar' },
  { title: 'Pie Chart', prependIcon: 'fa-solid fa-chart-pie', to: '/pie' },
  { title: 'Line Chart', prependIcon: 'fa-solid fa-chart-line', to: '/line' },
  { title: 'Geography Chart', prependIcon: 'fa-solid fa-map', to: '/geo' },
]

const ui = useUi()
const theme = useTheme()
const drawerColor = computed(() => theme.global.current.value.dark ? 'primary-500' : 'primary-600')
</script>

<template>
  <v-navigation-drawer
    :color="drawerColor"
    v-model="ui.drawer"
    :rail="ui.rail"
    permanent
    @click="() => { ui.rail = false }">
    <v-list>
      <v-list-item v-show="!ui.rail">
        <h1>TUXMIN</h1>
        <template #append>
          <v-btn
            variant="text"
            icon="fa-solid fa-circle-chevron-left"
            @click.stop="() => { ui.rail = !ui.rail }" />
        </template>
      </v-list-item>
      <v-list-item prepend-avatar="/favicon.ico" title="Romeo Méndez" />
    </v-list>

    <v-divider></v-divider>

    <v-list :lines="false" nav>
      <template v-for="(item) in items" :key="item.title">
        <v-list-subheader
          v-if="item.type === 'subheader'"
          :title="item.title"
          class="text-h6" />
        <v-list-item
          v-else
          :active-color="drawerColor ? 'secondary' : 'primary'"
          v-bind="item" />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>