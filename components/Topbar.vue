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
        <VCol cols="3" class="text-right">
          <v-btn icon="fa-solid fa-circle-half-stroke" @click="toggleTheme" />
          <v-btn icon="fa-regular fa-bell" />
          <v-btn icon="fa-solid fa-gear" />
          <v-btn icon="fa-regular fa-user" />
        </VCol>
      </VRow>
    </VContainer>
  </VAppBar>
</template>