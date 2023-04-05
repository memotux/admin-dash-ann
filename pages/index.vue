<script lang="ts" setup>
import type { ListOverallSalesQuery, ListTransactionsQuery } from '~~/graphql/types';

definePageMeta({
  title: 'Dashboard',
  description: 'Welcome to your Dashboard'
})

const { data: overallStats } = await useListOverall<ListOverallSalesQuery>({
  query: 'listOverallSales'
})
const { data: transactions } = await useListTransactions<ListTransactionsQuery>({
  limit: 50,
  query: 'customListT',
})

const monthStats = computed(() => overallStats.value?.listOverallSales?.items[0]?.monthlyData?.find((monthly) => monthly!.month === new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())))
const todayStats = computed(() => overallStats.value?.listOverallSales?.items[0]?.dailyData?.find((daily) => daily!.date === '2021-11-15'))

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
    <VRow align="stretch" dense>
      <VCol v-if="overallStats?.listOverallSales?.items[0]" cols="12" lg="6">
        <VRow align="center" dense>
          <VCol>
            <StatBox
              color="primary-700"
              density="compact"
              class="h-100"
              title="Total Customers"
              :value="overallStats.listOverallSales.items[0].totalCustomers!"
              increase="+14%"
              description="Since last month"
              icon="fa-solid fa-envelope" />
          </VCol>
          <VCol>
            <StatBox
              color="primary-700"
              density="compact"
              class="h-100"
              title="Sales Today ($)"
              :value="todayStats!.totalSales"
              increase="+21%"
              description="Since last month"
              icon="fa-solid fa-cart-plus" />
          </VCol>
        </VRow>
        <VRow align="stretch" dense>
          <VCol>
            <StatBox
              color="primary-700"
              density="compact"
              class="h-100"
              title="Monthly Sales ($)"
              :value="monthStats!.totalSales"
              increase="+5%"
              description="Since last month"
              icon="fa-solid fa-user-plus" />
          </VCol>
          <VCol>
            <StatBox
              color="primary-700"
              density="compact"
              class="h-100"
              title="Yearly Sales ($)"
              :value="overallStats.listOverallSales.items[0].yearlySalesTotal!"
              increase="+43%"
              description="Since last month"
              icon="fa-solid fa-traffic-light" />
          </VCol>
        </VRow>
      </VCol>
      <VCol>
        <VCard color="primary-700">
          <VCardText>
            <GraphOverall is-dashboard />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <VRow align="stretch" dense>
      <VCol cols="12" lg="8">
        <VCard color="primary-700">
          <VCardTitle>
            <h2 class="text-h6 text-secondary">Latests Transactions</h2>
          </VCardTitle>
          <VCardText>
            <VDataTable
              :items-per-page="itemsPerPage"
              :headers="headers"
              :items="transactions?.listTransactions?.items"
              item-title="userId"
              item-value="id"
              class="elevation-1 rounded-lg">
              <template v-slot:item.createdAt="{ item }">
                {{ formatDate(new Date(item.raw.createdAt), undefined, {
                  dateStyle: 'short'
                })
                }}
              </template>
              <template v-slot:item.products="{ item }">
                {{ item.raw.products.items.length }}
              </template>
              <template v-slot:item.cost="{ item }">
                {{ formatCurrency(item.raw.cost) }}
              </template>
            </VDataTable>
          </VCardText>
        </VCard>
      </VCol>
      <VCol>
        <VCard color="primary-700" class="h-100 d-flex flex-column align-center">
          <VCardTitle>
            <h2 class="text-h6 text-secondary">Sales by Category</h2>
          </VCardTitle>
          <VCardText class="d-flex align-center">
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