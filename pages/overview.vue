<script lang="ts" setup>
// @ts-ignore
import { line, text, ruleY } from "@observablehq/plot";
import { ListOverallSalesQuery } from '~~/graphql/types';

definePageMeta({
  title: 'Overview',
  description: 'Overview of general revenue and profit'
})

const loadOverAllData = async () => {
  await useFetch('/api/load/overall')
}

const yLabel = {
  sales: 'Revenue',
  units: 'Units'
}

const views = ref<'sales' | 'units'>('units')

const { data, pending } = await useFetch<ListOverallSalesQuery>('/api/list/overall', {
  key: 'api:list:overall',
  query: {
    query: 'listOverallSales'
  }
})

const plot = computed(() => {
  if (!data.value?.listOverallSales?.items[0]?.monthlyData?.length) return { marks: [] }

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
    y: {
      label: `↑ Total ${yLabel[views.value]} for Year`
    },
    marks: [
      line(lineData, {
        curve: "catmull-rom",
        marker: "circle"
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
  <VContainer>
    <VRow align="center" justify="end" class="mb-8">
      <VBtn @click="loadOverAllData" color="secondary">
        Load Overall Sales
      </VBtn>
    </VRow>
    <VRow v-if="pending || !data" justify="center" align="center">
      <VProgressCircular color="secondary" indeterminate />
    </VRow>
    <VRow v-else>
      <VCol cols="3">
        <VSelect
          v-model="views"
          name="overall-sales-views"
          label="Select View..."
          prepend-inner-icon="fa-solid fa-chart-line"
          prefix="Chart:"
          :items="[{ title: 'Sales', value: 'sales' }, { title: 'Units', value: 'units' }]"
          single-line />
      </VCol>
      <VDivider />
      <VCol cols="12">
        <PlotLine v-bind="plot" />
      </VCol>
    </VRow>
  </VContainer>
</template>
