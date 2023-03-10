<script setup lang="ts">
defineProps<{ title: string, description?: string }>()
</script>

<template>
  <v-container>
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </v-container>
</template>