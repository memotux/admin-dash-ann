<script lang="ts" setup>
// @ts-ignore
import { lineY, ruleY } from "@observablehq/plot";
import { DatePicker } from "v-calendar";
import type { ListOverallSalesQuery } from "~~/graphql/types";

definePageMeta({
  title: 'Daily Sales',
  description: 'Chart of daily sales'
})

const dates = ref<{
  start: Date | string
  end: Date | string
}>({
  start: '',
  end: ''
})

const { data, pending } = await useListOverall<ListOverallSalesQuery>({
  query: 'listOverallSales'
})

onBeforeMount(() => {
  if (!data.value?.listOverallSales?.items[0]?.dailyData?.length) return

  const { dailyData } = data.value.listOverallSales.items[0]

  dates.value.start = new Date(dailyData[0]!.date!)
  dates.value.end = new Date(dailyData[dailyData.length - 1]!.date!)
})

const plot = computed(() => {
  if (!data.value?.listOverallSales?.items[0]?.dailyData?.length) return { marks: [] }

  const linesData: { date: Date, total: number, type: 'sales' | 'units' }[] = []

  const { dailyData } = data.value.listOverallSales.items[0]

  dailyData.forEach((data) => {
    if (!data || !data.date) return

    const dateFormatted = new Date(data.date)
    if (dateFormatted >= dates.value.start && dateFormatted <= dates.value.end) {
      linesData.push({ date: dateFormatted, total: data.totalSales, type: 'sales' })
      linesData.push({ date: dateFormatted, total: data.totalUnits, type: 'units' })
    }
  })

  return {
    x: {
      label: 'Day →'
    },
    color: {
      legend: true,
      scheme: 'oranges',
      tickFormat: (l: string) => `${l.toLocaleUpperCase()} ${l === 'sales' ? '($)' : '(Q)'}`,
      style: {
        float: 'right',
        fontSize: '1rem'
      }
    },
    marks: [
      lineY(linesData, { x: "date", y: "total", stroke: "type", marker: "circle" }),
      ruleY([0], {})
    ]
  }
})
const masks = ref({
  modelValue: 'YYYY-MM-DD',
});
</script>

<template>
  <VContainer>
    <VRow v-if="pending || !data || plot.marks.length < 1" justify="center" align="center">
      <VProgressCircular size="65" color="secondary" indeterminate />
    </VRow>
    <VRow v-else>
      <VCol>
        <Plot v-bind="plot" />
      </VCol>
      <VCol cols="3">
        <h5 class="text-center mb-2">Pick a date range</h5>
        <DatePicker v-model.range="dates" :masks="masks">
          <template #default="{ inputValue, inputEvents }">
            <div class="flex justify-center items-center">
              <VTextField v-model="inputValue.start" v-on="inputEvents.start"
                label="Start:"
                prependInnerIcon="fa-solid fa-calendar-days" readonly />
              <VTextField v-model="inputValue.end" v-on="inputEvents.end"
                label="End:"
                prependInnerIcon="fa-solid fa-calendar-days" readonly />
            </div>
          </template>
        </DatePicker>
      </VCol>
    </VRow>
  </VContainer>
</template>
