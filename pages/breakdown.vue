<script lang="ts" setup>
import { ListOverallSalesQuery } from '~~/graphql/types';

definePageMeta({
  title: 'Breakdown',
  description: 'Breakdown of Sales by Category'
})

const { data, pending } = await useFetch<ListOverallSalesQuery>('/api/list/overall', {
  key: 'api:list:overall',
  query: {
    query: 'listOverallSales'
  }
})
</script>

<template>
  <VContainer>
    <VRow v-if="pending || !data" justify="center" align="center">
      <VProgressCircular size="65" color="secondary" indeterminate />
    </VRow>
    <VRow v-else>
      <VCol cols="12">
        <!-- <PlotLine v-bind="plot" /> -->
      </VCol>
    </VRow>
  </VContainer>
</template>
