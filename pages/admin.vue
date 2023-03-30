<script lang="ts" setup>
import type { UserByRoleQuery } from '~~/graphql/types';

definePageMeta({
  title: 'Admins',
  description: 'List of Administrators'
})

const headers = [
  { title: 'Name', key: 'name', sortable: false },
  { title: 'Email', key: 'email', sortable: false },
  { title: 'Country', key: 'country', sortable: true },
  { title: 'Occupation', key: 'occupation', sortable: true },
  { title: 'Role', key: 'role', sortable: false },
]

const itemsPerPage = ref(10)

const { data } = useFetch<UserByRoleQuery>('/api/listCustomers', {
  key: 'api:listCustomers:counts',
  query: {
    role: UserRoles.admin,
    query: 'userByRole'
  }
})

const search = ref('')
</script>

<template>
  <VContainer>
    <VRow v-if="data?.userByRole && data.userByRole.items.length > 0">
      <VDataTable
        :items-per-page="itemsPerPage"
        :headers="headers"
        :items="data?.userByRole?.items"
        :search="search"
        item-title="name"
        item-value="email"
        class="elevation-1 rounded-lg">
        <template #top>
          <VCol cols="3" class="ml-auto">
            <VTextField
              v-model="search"
              prepend-inner-icon="mdi:mdi-magnify"
              label="Search"
              single-line
              hide-details />
          </VCol>
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