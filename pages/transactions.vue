<script lang="ts" setup>
import type { ListTransactionsQuery, Transaction } from '~~/graphql/types';
import type { ListTransactionsParams } from '~~/composables/api/list/transactions';
import type { SortItem } from '~~/utils';

definePageMeta({
  title: 'Transactions',
  description: 'Entire List of Transactions'
})

const headers = [
  { title: 'ID', key: 'id', sortable: true },
  { title: 'User', key: 'userId', sortable: true },
  { title: 'Create At', key: 'createdAt', sortable: true },
  { title: '# of Products', key: 'products', sortable: false },
  { title: 'Cost', key: 'cost', sortable: true },
]

const loadTransactions = async () => {
  await useFetch('/api/load/transactions')
}
const loadPTs = async () => {
  await useFetch('/api/load/pst')
}

/**
 * VDataTableServer Conf Functions & Variables
 */

const query = ref<ListTransactionsParams>({
  limit: 10,
  query: 'customListT',
})
const { data, pending, refresh } = await useListTransactions<ListTransactionsQuery>(query.value)

const { data: count } = await useListTransactions<ListTransactionsQuery>({
  query: 'countT'
})

const totalItems = computed(() => {
  if (query.value.filter) {
    return data.value?.data.listTransactions?.items.length
  } else {
    return count.value?.data.listTransactions?.items?.length || 0
  }
})
const nextToken = computed(() => data.value?.data.listTransactions?.nextToken)

const search = ref('')
const sortedTransactions = ref<Transaction[] | null>(null)
const pageToken = reactive(new Map<number, string | null>([[1, null]]))

const loadNextItems = (page: number) => {
  if (data.value?.data.listTransactions?.items?.length && data.value?.data.listTransactions.nextToken) {

    if (!pageToken.has(page)) {
      pageToken.set(page, nextToken.value as string)
    }

    query.value.nextToken = pageToken.get(page)
    sortedTransactions.value = null

    refresh()
  }
}
const refreshPerPage = (itemsPerPage: number) => {
  if (data.value?.data.listTransactions?.items?.length) {
    query.value.limit = itemsPerPage
    refresh()
  }
}

const handleSortBy = (data: Transaction[], sort: SortItem[]) => {
  // TODO: Sort on other pages, not just on first.
  sortedTransactions.value = sortItems(data, sort, 'en-US')
}

const onClickSearch = () => {
  query.value.filter = {
    // @ts-ignore
    or: [
      { id: { contains: search.value } },
      { userId: { contains: search.value } },
      { cost: { eq: parseFloat(search.value) || undefined } }
    ]
  }
  refresh()

}
const onClickClear = () => {
  query.value.filter = undefined
  refresh()
}
</script>

<template>
  <VContainer>
    <VRow align="center" justify="end" class="mb-8">
      <VBtn @click="loadTransactions" color="secondary" class="mr-4">
        Load Transactions
      </VBtn>
      <VBtn @click="loadPTs" color="secondary">
        Load PTs
      </VBtn>
    </VRow>
    <!-- <pre>{{ data }}</pre> -->
    <VRow
      v-if="data?.data.listTransactions && data?.data.listTransactions.items.length > 0">
      <VDataTableServer
        :items-per-page="query.limit"
        :headers="headers"
        :items-length="totalItems"
        :items="sortedTransactions || data?.data.listTransactions.items"
        :loading="pending"
        :search="search"
        class="elevation-1"
        item-title="name"
        item-value="id"
        @update:page="loadNextItems"
        @update:itemsPerPage="refreshPerPage"
        @update:sortBy="(sort: SortItem[]) => { handleSortBy(data!.data.listTransactions!.items as Transaction[], sort) }">
        <template #top>
          <VToolbar color="primary-500" class="pa-2">
            <VSpacer />
            <VCol cols="12" md="3">
              <VTextField
                v-model="search"
                variant="solo"
                label="Search transactions"
                append-inner-icon="mdi:mdi-magnify"
                bg-color="primary-400"
                clearable
                single-line
                hide-details
                @click:append-inner="onClickSearch"
                @click:clear="onClickClear" />
            </VCol>
          </VToolbar>
        </template>
        <template v-slot:item.createdAt="{ item }">
          {{ formatDate(new Date(item.raw.createdAt)) }}
        </template>
        <template v-slot:item.products="{ item }">
          {{ item.raw.products.items.length }}
        </template>
        <template v-slot:item.cost="{ item }">
          {{ formatCurrency(item.raw.cost) }}
        </template>
      </VDataTableServer>
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