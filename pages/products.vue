<script lang="ts" setup>
import type { Product } from '~~/graphql/types';
import type { ListProductsQuery } from '~~/graphql/types';

type ProductsProps = Omit<Required<Product>, '__typename' | 'owner' | 'createdAt' | 'updatedAt' | 'monthlyStat' | 'dailyStat' | 'transactions'>

definePageMeta({
  title: 'Products',
  description: 'See your list of products'
})

const { data, pending } = await useFetch<ListProductsQuery>('/api/list/products')

const products = computed(() => data.value?.listProducts?.items as Array<ProductsProps> | undefined)
// const isLoading = computed(() => {
//   console.log(!Boolean(products.value?.length), pending.value);
//   return !Boolean(products.value?.length) || !pending.value
// })

const uploadProducts = async () => {
  const user = await useUser()
  await useFetch('/api/load/proudcts', {
    query: {
      u: user.username
    }
  })
}
</script>

<template>
  <VContainer style="min-height: 80vh; height: 100%;">
    <VRow align="center" justify="end">
      <VBtn @click="uploadProducts" color="secondary">Load Products</VBtn>
    </VRow>
    <VRow v-if="Boolean(products?.length) || !pending" align="stretch" justify="start">
      <VCol v-for="product in products"
        :key="product!.id" cols="12" md="4" lg="3">
        <ProductCard v-bind="product" />
      </VCol>
    </VRow>
    <VRow v-else align="center" justify="center" style="min-height: inherit;">
      <VProgressCircular color="secondary-700" indeterminate :size="80" width="8" />
    </VRow>
  </VContainer>
</template>
