<script lang="ts" setup>
// @ts-ignore
import { plot } from "@observablehq/plot";

const props = withDefaults(defineProps<{
  marks: any[]
  inset?: number
  grid?: boolean
  color?: Record<string, unknown>
  x?: Record<string, unknown>
  y?: Record<string, unknown>
  style?: Record<string, unknown>
  name?: string
}>(), {
  inset: 10,
  grid: true,
  x: () => ({
    label: "Month →"
  }),
  y: () => ({
    label: '↑ Total',
  }),
  style: () => ({
    background: "transparent",
    width: '100%',
    height: '75vh'
  }),
  className: 'plot-line-chart',
  marks: () => []
})

const container = ref<HTMLDivElement | null>(null)

const lineChart = computed(() => plot(props))

onMounted(() => {
  container.value?.append(lineChart.value)
})
onUpdated(() => {
  container.value?.replaceChildren(lineChart.value)
})
</script>

<template>
  <div ref="container">
  </div>
</template>
