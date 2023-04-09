<script lang="ts" setup>
import type { UserByRoleQuery } from '~~/graphql/types';

definePageMeta({
  title: 'Customers',
  description: 'List of Customers'
})

const headers = [
  { title: 'Name', key: 'name', sortable: false },
  { title: 'Email', key: 'email', sortable: false },
  { title: 'Country', key: 'country', sortable: true },
  { title: 'Occupation', key: 'occupation', sortable: true },
  { title: 'Role', key: 'role', sortable: false },
]

const itemsPerPage = ref(10)

const { data } = await useListUsers<UserByRoleQuery>({
  role: UserRoles.user,
  query: 'userByRole'
})

const loadCustomers = async () => {
  await useLoadUsers()
}

/**
 * VDataTableServer Conf Functions & Variables
 */

// const query = ref<UserByRoleQueryVariables & { query: 'userByRole' }>({
//   role: UserRoles.user,
//   limit: 10,
//   query: 'userByRole'
// })
// const { data, pending, refresh } = useFetch<UserByRoleQuery>('/api/listCustomers', {
//   query
// })

// const totalItems = computed(() => counts.value?.userByRole?.items?.length || 0)
// const nextToken = computed(() => data.value?.userByRole?.nextToken)
// const customers = computed(() => data.value?.userByRole?.items)

// const pageToken = reactive(new Map<number, string | null>([[1, null]]))

// const loadNextItems = (page: number) => {
//   if (data.value?.userByRole?.items?.length && data.value?.userByRole?.nextToken) {

//     if (!pageToken.has(page)) {
//       pageToken.set(page, nextToken.value as string)
//     }

//     query.value.nextToken = pageToken.get(page)

//     refresh()
//   }
// }
// const refreshPerPage = (itemsPerPage: number) => {
//   if (data.value?.userByRole?.items?.length) {
//     query.value.limit = itemsPerPage
//     refresh()
//   }
// }
/**
 * Substitute VDataTable with this component
 */
// <!-- <VDataTableServer
//         :items-per-page="query.limit"
//         :headers="headers"
//         :items-length="totalItems"
//         :items="customers"
//         :loading="pending"
//         class="elevation-1"
//         item-title="name"
//         item-value="email"
//         @update:page="loadNextItems"
//         @update:itemsPerPage="refreshPerPage" /> -->
</script>

<template>
  <VContainer>
    <VRow align="center" justify="end" class="mb-8">
      <VBtn @click="loadCustomers" color="secondary">
        Load Customers
      </VBtn>
    </VRow>
    <VRow v-if="data?.userByRole && data.userByRole.items.length > 0">
      <VDataTable
        :items-per-page="itemsPerPage"
        :headers="headers"
        :items="data.userByRole.items"
        item-title="name"
        item-value="email"
        class="elevation-1 rounded-lg" />
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