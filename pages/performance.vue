<script lang="ts" setup>
import { TransactionsByUserIdQuery } from '~~/graphql/types';

definePageMeta({
  title: 'Performace',
  description: 'Track your Affilate Sales Performance'
})

const { data } = await useListUsers<TransactionsByUserIdQuery>({
  userId: '63701cc1f03239c72c000184',
  query: 'transactionsByUser'
})
const headers = [
  { title: 'ID', key: 'id', sortable: false },
  { title: 'UserID', key: 'userId', sortable: false },
  { title: 'Created At', key: 'createdAt', sortable: true },
  { title: 'Products', key: 'products', sortable: true },
  { title: 'Cost', key: 'cost', sortable: false },
]

const itemsPerPage = ref(10)
</script>

<template>
  <VContainer>
    <VRow v-if="!data" justify="center" align="center">
      <VProgressCircular color="secondary" indeterminate />
    </VRow>
    <VRow v-else>
      <!-- <pre>{{ data }}</pre> -->
      <VDataTable
        :items-per-page="itemsPerPage"
        :headers="headers"
        :items="data.transactionsByUserId?.items"
        item-title="name"
        item-value="email"
        class="elevation-1 rounded-lg">
        <template #item.products="{ item }">
          {{ item.value.products.items.length }}
        </template>
        <template #item.cost="{ item }">
          $ {{ item.value.cost }}
        </template>
      </VDataTable>
    </VRow>
  </VContainer>
</template>

<style scoped>
.v-data-table {
  --v-theme-surface: var(--v-theme-primary-500)
}

.v-data-table .v-table__wrapper>table tbody>tr>td {
  background: rgb(var(--v-theme-primary-400))
}
</style>