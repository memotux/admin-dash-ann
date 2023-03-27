<script lang="ts" setup>
import { ListOverallSalesQuery, OverallSales } from '~~/graphql/types';

definePageMeta({
  title: 'Overview',
  description: 'Overview of general revenue and profit'
})

const loadOverAllData = async () => {
  await useFetch('/api/load/overall')
}

const { data, pending } = await useFetch<ListOverallSalesQuery>('/api/list/overall', {
  key: 'api:list:overall',
  query: {
    query: 'listOverallSales'
  }
})

const views = ref<'sales' | 'units'>('units')

const lineData = computed(() => {
  if (!data.value?.listOverallSales?.items[0]?.monthlyData) return []

  if (views.value === 'sales') {
    return data.value.listOverallSales.items[0].monthlyData.map((data) => {
      return [new Date(`${data!.month} 1, 2021`), data!.totalSales]
    })
  } else {
    return data.value.listOverallSales.items[0].monthlyData.map((data) => {
      return [new Date(`${data!.month} 1, 2021`), data!.totalUnits]
    })
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
          :items="[{ title: 'Sales', value: 'sales' }, { title: 'Units', value: 'units' }]"
          single-line />
      </VCol>
      <VDivider />
      <VCol cols="12">
        <PlotLine :data="lineData" :view="views" />
      </VCol>
    </VRow>
  </VContainer>
</template>
