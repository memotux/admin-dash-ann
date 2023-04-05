<script setup lang="ts">
import { useTheme } from "vuetify"

const props = defineProps<{ isTopbar?: boolean }>()

const theme = useTheme()
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
const btnColor = computed(() => props.isTopbar ? undefined : 'primary-600')
</script>

<template>
  <VBtn :color="btnColor" icon="fa-solid fa-circle-half-stroke"
    @click="toggleTheme" />
  <VBtn :color="btnColor" icon="fa-regular fa-bell" />
  <VBtn :color="btnColor" icon="fa-solid fa-gear" />
  <VBtn :color="btnColor" icon="fa-regular fa-user" />
</template>