<script lang="ts" setup>
import { plot, line, text, ruleY } from "@observablehq/plot";

const props = defineProps<{ data: [Date, number][], view: 'sales' | 'units', isDashboard?: boolean }>()

const container = ref<HTMLDivElement | null>(null)
const yLabel = {
  sales: 'Total Revenue for Year',
  units: 'Total Units for Year'
}

const lineChart = computed(() => plot({
  inset: 10,
  grid: true,
  x: {
    label: props.isDashboard ? "" : "Month →"
  },
  y: {
    label: props.isDashboard ? "" : `↑ ${yLabel[props.view]}`,
  },
  style: {
    background: "transparent",
    width: '100%',
    height: '75vh'
  },
  className: 'plot-line-chart',
  marks: [
    line(props.data, {
      curve: "catmull-rom",
      marker: "circle"
    }),
    text(props.data, {
      text: (d: typeof props.data[0]) => new Intl.DateTimeFormat("en-US", { month: props.isDashboard ? 'short' : 'long' }).format(d[0]),
      dy: -8
    }),
    ruleY([0], {})
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
