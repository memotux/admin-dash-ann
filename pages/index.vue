<script lang="ts" setup>
import { ListTransactionsQuery } from '~~/graphql/types';


definePageMeta({
  title: 'Dashboard',
  description: 'Welcome to your Dashboard'
})

const { data: oversaleStats } = await useOverallStats()
const { data: transactions } = await useFetch<ListTransactionsQuery>(
  '/api/listTransactions',
  {
    key: 'api:listT',
    query: {
      limit: 50,
      query: 'customListT',
    }
  }
)

const {
  totalCustomers,
  yearlySalesTotal,
  yearlyTotalSoldUnits,
  monthlyData, dailyData } = oversaleStats.value!.listOverallSales!.items[0]!

// @ts-ignore
const monthStats = monthlyData!.find(({ month }: { month: string }) => month === new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date()))
// @ts-ignore
const todayStats = dailyData!.find(({ date }: { date: string }) => date === '2021-11-15')
</script>

<template>
  <VContainer>
    <VRow justify="center" align="center">
      <VCol cols="12" lg="4">
        <VRow align="center">
          <VCol cols="12" md="6">
            <StatBox
              color="primary-700"
              title="Total Customers"
              :value="totalCustomers!"
              increase="+14%"
              description="Since last month"
              icon="fa-solid fa-envelope" />
          </VCol>
          <VCol cols="12" md="6">
            <StatBox
              color="primary-700"
              title="Sales Today"
              :value="todayStats!.totalSales"
              increase="+21%"
              description="Since last month"
              icon="fa-solid fa-cart-plus" />
          </VCol>
        </VRow>
        <VRow align="stretch">
          <VCol cols="12" md="6">
            <StatBox
              color="primary-700"
              title="Monthly Sales"
              :value="monthStats!.totalSales"
              increase="+5%"
              description="Since last month"
              icon="fa-solid fa-user-plus" />
          </VCol>
          <VCol cols="12" md="6">
            <StatBox
              color="primary-700"
              title="Yearly Sales"
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
  </VContainer>
</template>
