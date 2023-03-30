<script lang="ts" setup>
import { useTheme } from "vuetify";
definePageMeta({
  title: 'Breakdown',
  description: 'Breakdown of Sales by Category'
})

const theme = useTheme()

const container = ref<HTMLDivElement | null>(null)

const { data, pending } = await useFetch('/api/list/overall', {
  key: 'api:list:overall',
  query: {
    query: 'listOverallSales'
  },
  transform: (data) => data.listOverallSales?.items[0]?.salesByCategory
})

const cats = Object.entries(data.value!).map(([cat, val]) => ([cat, val] as [string, number]))

const plot = DonutChart(cats, {
  width: 1024,
  height: 720,
  colors: [
    theme.current.value.colors['secondary-300'],
    theme.current.value.colors['secondary-400'],
    theme.current.value.colors['secondary-500'],
    theme.current.value.colors['secondary-600']
  ]
})

onMounted(() => {
  container.value?.append(plot)
})
</script>

<template>
  <VContainer>
    <VRow v-if="pending || !data" justify="center" align="center">
      <VProgressCircular size="65" color="secondary" indeterminate />
    </VRow>
    <VRow v-else justify="center" align="center">
      <div ref="container"></div>
    </VRow>
  </VContainer>
</template>
