<script lang="ts" setup>

definePageMeta({
  title: 'Overview',
  description: 'Overview of general revenue and profit'
})

const loadOverAllData = async () => {
  await useFetch('/api/load/overall', { method: 'post' })
}
</script>

<template>
  <VContainer>
    <GraphOverall>
      <template #no-data>
        <VBtn @click="loadOverAllData" color="secondary">
          Load Overall Sales
        </VBtn>
      </template>
    </GraphOverall>
  </VContainer>
</template>
