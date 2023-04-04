<script lang="ts" setup>
import { useTheme } from "vuetify";
import type { ListOverallSalesQuery } from '~~/graphql/types';

const props = defineProps<{
  width?: number
  height?: number
}>()

const theme = useTheme()

const container = ref<HTMLDivElement | null>(null)

const { data, pending } = await useListOverall<ListOverallSalesQuery>({
  query: 'listOverallSales'
})

const plot = computed(() => {
  const cats = Object.entries(data.value?.listOverallSales?.items[0]?.salesByCategory!).map(([cat, val]) => ([cat, val] as [string, number]))

  return DonutChart(cats, {
    width: props.width || 1024,
    height: props.height || 720,
    colors: [
      theme.current.value.colors['secondary-300'],
      theme.current.value.colors['secondary-400'],
      theme.current.value.colors['secondary-500'],
      theme.current.value.colors['secondary-600']
    ]
  })
})

onMounted(() => {
  container.value?.append(plot.value)
})
</script>

<template>
  <VProgressCircular v-if="pending || !data" size="65" color="secondary" indeterminate />
  <div v-else ref="container"></div>
</template>
