<script lang="ts" setup>
import { ListTransactionsQuery } from '~~/graphql/types';

definePageMeta({
  title: 'Dashboard',
  description: 'Welcome to your Dashboard'
})

const { data: overallStats } = await useOverallStats()
const { data: transactions } = await useFetch<ListTransactionsQuery>(
  '/api/list/transactions',
  {
    query: {
      limit: 50,
      query: 'customListT',
    }
  }
)

const {
  totalCustomers,
  yearlySalesTotal,
  monthlyData, dailyData } = overallStats.value!.listOverallSales!.items[0]!

const monthStats = monthlyData!.find((monthly) => monthly!.month === new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date()))
const todayStats = dailyData!.find((daily) => daily!.date === '2021-11-15')

const headers = [
  { title: 'ID', key: 'id', sortable: true },
  { title: 'User', key: 'userId', sortable: true },
  { title: 'Create At', key: 'createdAt', sortable: true },
  { title: '# of Products', key: 'products', sortable: false },
  { title: 'Cost', key: 'cost', sortable: true },
]

const itemsPerPage = ref(5)
</script>

<template>
  <VContainer>
    <VRow align="stretch" no-gutters>
      <VCol cols="12" lg="4">
        <VRow align="center" no-gutters class="mb-2">
          <VCol cols="12" md="6">
            <StatBox
              class="pa-1 ma-1"
              color="primary-700"
              density="compact"
              style="height: 100%;"
              title="Total Customers"
              :value="totalCustomers!"
              increase="+14%"
              description="Since last month"
              icon="fa-solid fa-envelope" />
          </VCol>
          <VCol cols="12" md="6">
            <StatBox
              class="pa-1 ma-1"
              color="primary-700"
              density="compact"
              style="height: 100%;"
              title="Sales Today ($)"
              :value="todayStats!.totalSales"
              increase="+21%"
              description="Since last month"
              icon="fa-solid fa-cart-plus" />
          </VCol>
        </VRow>
        <VRow align="stretch" no-gutters>
          <VCol cols="12" md="6">
            <StatBox
              class="pa-1 ma-1"
              color="primary-700"
              density="compact"
              style="height: 100%;"
              title="Monthly Sales ($)"
              :value="monthStats!.totalSales"
              increase="+5%"
              description="Since last month"
              icon="fa-solid fa-user-plus" />
          </VCol>
          <VCol cols="12" md="6">
            <StatBox
              class="pa-1 ma-1"
              color="primary-700"
              density="compact"
              style="height: 100%;"
              title="Yearly Sales ($)"
              :value="yearlySalesTotal!"
              increase="+43%"
              description="Since last month"
              icon="fa-solid fa-traffic-light" />
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12" lg="8">
        <VCard color="primary-700">
          <VCardText>
            <GraphOverall is-dashboard />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <VRow align="stretch" no-gutters>
      <VCol cols="12" lg="8" class="pa-2">
        <VDataTable
          :items-per-page="itemsPerPage"
          :headers="headers"
          :items="transactions?.listTransactions?.items"
          item-title="userId"
          item-value="id"
          class="elevation-1 rounded-lg">
          <template v-slot:item.createdAt="{ item }">
            {{ formatDate(new Date(item.raw.createdAt), undefined, { dateStyle: 'short' })
            }}
          </template>
          <template v-slot:item.products="{ item }">
            {{ item.raw.products.items.length }}
          </template>
          <template v-slot:item.cost="{ item }">
            {{ formatCurrency(item.raw.cost) }}
          </template>
        </VDataTable>
      </VCol>
      <VCol cols="12" lg="4" class="pa-2">
        <VCard color="primary-700"
          style="height: 100%; display: flex; align-items: center;">
          <VCardText>
            <GraphPie :width="600" :height="400" />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.v-data-table {
  --v-theme-surface: var(--v-theme-primary-700)
}

.v-data-table .v-table__wrapper>table tbody>tr>td {
  background: rgb(var(--v-theme-primary-400))
}
</style>