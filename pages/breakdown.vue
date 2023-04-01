<script lang="ts" setup>
definePageMeta({
  title: 'Breakdown',
  description: 'Breakdown of Sales by Category'
})
</script>

<template>
  <VContainer>
    <VRow justify="center" align="center">
      <GraphPie />
    </VRow>
  </VContainer>
</template>
