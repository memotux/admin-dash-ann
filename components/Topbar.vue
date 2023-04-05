<script setup lang="ts">
import { useTheme } from "vuetify"

const theme = useTheme()
const ui = useUi()
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
const drawerColor = computed(() => theme.global.current.value.dark ? 'primary-500' : 'primary-600')
</script>

<template>
  <VAppBar :color="drawerColor">
    <VContainer v-if="ui.isAuth" fluid>
      <VRow justify="space-between" align="center">
        <VCol cols="3">
          <VTextField
            density="compact"
            variant="plain"
            label="Search"
            append-inner-icon="mdi:mdi-magnify"
            single-line
            hide-details />
        </VCol>
        <VCol cols="9" class="text-right">
          <VBtn icon="fa-solid fa-circle-half-stroke" @click="toggleTheme" />
          <VBtn icon="fa-regular fa-bell" />
          <VBtn icon="fa-solid fa-gear" />
          <VBtn icon="fa-regular fa-user" />
          <VAppBarNavIcon @click="() => { ui.drawer = !ui.drawer }" />
        </VCol>
      </VRow>
    </VContainer>
  </VAppBar>
</template>