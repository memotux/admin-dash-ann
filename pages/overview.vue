<script lang="ts" setup>

definePageMeta({
  title: 'Overview',
  description: 'Overview of general revenue and profit'
})

const loadOverAllData = async () => {
  await useFetch('/api/load/overall')
}
</script>

<template>
  <VContainer>
    <VRow align="center" justify="end" class="mb-8">
      <VBtn @click="loadOverAllData" color="secondary">
        Load Overall Sales
      </VBtn>
    </VRow>
    <GraphOverall />
  </VContainer>
</template>
