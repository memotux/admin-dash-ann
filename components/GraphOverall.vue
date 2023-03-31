<script setup lang="ts">
import { useTheme } from "vuetify";
import { line, text, ruleY, ruleX } from "@observablehq/plot"

const props = defineProps<{ isDashboard?: boolean }>()

const theme = useTheme()

const yLabel = {
  sales: 'Revenue',
  units: 'Units'
}

const views = ref<'sales' | 'units'>('units')

const { data, pending } = await useOverallStats()

const plot = computed(() => {
  if (!data.value?.listOverallSales?.items[0]?.monthlyData?.length) return null

  const { monthlyData } = data.value.listOverallSales.items[0]

  let lineData: [Date, number][] = []

  if (views.value === 'sales') {
    lineData = monthlyData.map((data) => {
      return [new Date(`${data!.month} 1, 2021`), data!.totalSales]
    })
  } else {
    lineData = monthlyData.map((data) => {
      return [new Date(`${data!.month} 1, 2021`), data!.totalUnits]
    })
  }

  return {
    inset: 10,
    y: {
      label: props.isDashboard ? '↑ Total' : `↑ Total ${yLabel[views.value]} for Year`,
      labelAnchor: props.isDashboard ? 'center' : undefined,
      tickFormat: (t: number) => t > 999 ? `${t / 1000}K` : t,
    },
    x: props.isDashboard ? {
      ticks: [],
      label: 'Month →',
      labelAnchor: 'center',
    } : undefined,
    style: props.isDashboard ? {
      background: 'transparent',
      width: '100%',
      height: props.isDashboard ? '100%' : undefined,
      color: theme.current.value.colors['secondary']
    } : undefined,
    marks: [
      line(lineData, {
        curve: "catmull-rom",
        marker: "circle",
        // stroke: theme.current.value.colors['secondary']
      }),
      text(lineData, {
        text: (d: typeof lineData[0]) => new Intl.DateTimeFormat("en-US", { month: 'short' }).format(d[0]),
        dy: -8
      }),
      ruleY([0], {})
    ]
  }
})
</script>

<template>
  <VRow v-if="pending || !plot" justify="center" align="center">
    <VProgressCircular color="secondary" indeterminate />
  </VRow>
  <VRow v-else>
    <VCol v-if="!isDashboard" cols="3">
      <VSelect
        v-model="views"
        name="overall-sales-views"
        label="Select View..."
        prepend-inner-icon="fa-solid fa-chart-line"
        prefix="Chart:"
        :items="[{ title: 'Sales', value: 'sales' }, { title: 'Units', value: 'units' }]"
        single-line />
    </VCol>
    <VDivider v-if="!isDashboard" />
    <VCol cols="12">
      <Plot v-bind="plot" />
    </VCol>
  </VRow>
</template>