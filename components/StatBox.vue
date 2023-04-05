<script setup lang="ts">
defineProps<{
  title: string
  value: number
  increase: string
  icon: string
  description: string
}>()
</script>

<template>
  <VCard class="text-secondary">
    <VCardTitle>
      <VRow class="pa-4" align="center" justify="space-between">
        <h2 class="text-h6">{{ title }}</h2>
        <VIcon :icon="icon" size="1.125rem" />
      </VRow>
    </VCardTitle>
    <VCardSubtitle>
      <h3 class="text-center text-h3 font-weight-bold">{{ value }}</h3>
    </VCardSubtitle>
    <VCardText>
      <VRow class="pa-4" justify="space-between" align="center">
        <h5 class="text-h5">{{ increase }}</h5>
        {{ description }}
      </VRow>
    </VCardText>
  </VCard>
</template>