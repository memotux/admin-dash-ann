<script lang="ts" setup>
import { plot, line, text } from "@observablehq/plot";

const props = defineProps<{ data: any, view: 'sales' | 'units' }>()

const container = ref<HTMLDivElement | null>(null)
const yLabel = {
  sales: 'Revenue',
  units: 'Units solds'
}

const lineChart = computed(() => plot({
  inset: 10,
  grid: true,
  x: {
    label: "Months →"
  },
  y: {
    label: `↑ ${yLabel[props.view]}`,
  },
  style: {
    background: "transparent",
    width: '100%'
  },
  className: 'plot-line-chart',
  marks: [
    line(props.data, {
      curve: "catmull-rom",
      marker: "circle"
    }),
    text(props.data, {
      text: (d: any) => new Intl.DateTimeFormat("en-US", { month: 'long' }).format(d[0]),
      dy: -8
    })
  ]
}))

onMounted(() => {
  container.value?.append(lineChart.value)
})
onUpdated(() => {
  const current = container.value?.querySelector('.plot-line-chart')
  if (current) {
    container.value?.removeChild(current)
  }
  container.value?.append(lineChart.value)
})
</script>

<template>
  <div ref="container">
  </div>
</template>
