<script setup lang="ts">
import { useTheme } from 'vuetify'

const items = [
  { title: 'Dashboard', prependIcon: 'mdi:mdi-view-dashboard', to: '/' },
  { title: 'Client Facing', type: 'subheader' },
  { title: 'Products', prependIcon: 'fa-solid fa-cart-shopping', to: '/products' },
  { title: 'Customers', prependIcon: 'fa-solid fa-people-group', to: '/customers' },
  { title: 'Transaccions', prependIcon: 'fa-solid fa-file-invoice', to: '/transactions' },
  { title: 'Geography', prependIcon: 'fa-solid fa-globe', to: '/geo' },
  { title: 'Sales', type: 'subheader' },
  { title: 'Overview', prependIcon: 'fa-solid fa-store', to: '/overview' },
  { title: 'Daily', prependIcon: 'fa-solid fa-calendar-day', to: '/today' },
  { title: 'Monthly', prependIcon: 'fa-solid fa-calendar-days', to: '/monthly' },
  { title: 'Breakdown', prependIcon: 'fa-solid fa-chart-pie', to: '/brakedown' },
  { title: 'Management', type: 'subheader' },
  { title: 'Admin', prependIcon: 'fa-solid fa-toolbox', to: '/admin' },
  { title: 'Performance', prependIcon: 'fa-solid fa-arrow-trend-up', to: '/performace' },
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