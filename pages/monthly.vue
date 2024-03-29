<script lang="ts" setup>
import { ListOverallSalesQuery } from '~~/graphql/types';
// @ts-ignore
import { lineY, ruleY } from "@observablehq/plot";

definePageMeta({
  title: 'Monthly Sales',
  description: 'Chart of monthly sales'
})

const { data, pending } = await useListOverall<ListOverallSalesQuery>(ref('listOverallSales'))

const plot = computed(() => {
  if (!data.value?.listOverallSales?.items[0]?.dailyData?.length) return { marks: [] }

  const linesData: { date: Date, total: number, type: 'sales' | 'units' }[] = []

  const { monthlyData, year } = data.value.listOverallSales.items[0]

  if (!monthlyData?.length) return { marks: [] }

  monthlyData.forEach((data) => {
    if (!data || !data.month) return
    const dateFormatted = new Date(`${data.month} 1, ${year}`)
    linesData.push({ date: dateFormatted, total: data.totalSales, type: 'sales' })
    linesData.push({ date: dateFormatted, total: data.totalUnits, type: 'units' })
  })

  return {
    x: {
      label: 'Month →'
    },
    color: {
      legend: true,
      scheme: 'oranges',
      tickFormat: (l: string) => `${l.toLocaleUpperCase()} ${l === 'sales' ? '($)' : '(Q)'}`,
      style: {
        fontSize: '1rem'
      }
    },
    marks: [
      lineY(linesData, { x: "date", y: "total", stroke: "type", marker: "circle" }),
      ruleY([0], {})
    ]
  }
})
</script>

<template>
  <VContainer>
    <VRow v-if="pending || !data?.listOverallSales?.items.length" justify="center"
      align="center">
      <h2>Sorry! There is NO DATA to show.</h2>
    </VRow>
    <VRow v-else>
      <VCol cols="12">
        <Plot v-bind="plot" />
      </VCol>
    </VRow>
  </VContainer>
</template>
