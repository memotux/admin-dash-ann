<script setup lang="ts">
import { useTheme } from "vuetify"

const theme = useTheme()
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
const drawerColor = computed(() => theme.global.current.value.dark ? 'primary-500' : 'primary-600')
</script>

<template>
  <v-app-bar :color="drawerColor">
    <v-container fluid>
      <v-row justify="space-between" align="center">
        <v-col cols="3">
          <v-text-field
            density="compact"
            variant="plain"
            label="Search"
            append-inner-icon="mdi:mdi-magnify"
            single-line
            hide-details />
        </v-col>
        <v-col cols="3" class="text-right">
          <v-btn icon="fa-solid fa-circle-half-stroke" @click="toggleTheme" />
          <v-btn icon="fa-regular fa-bell" />
          <v-btn icon="fa-solid fa-gear" />
          <v-btn icon="fa-regular fa-user" />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>