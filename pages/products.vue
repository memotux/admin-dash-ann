<script lang="ts" setup>
import { useAuthenticator } from '@aws-amplify/ui-vue';
import type { Product } from '~~/graphql/types';

type ProductsProps = Omit<Required<Product>, '__typename' | 'owner' | 'createdAt' | 'updatedAt' | 'monthlyStat' | 'dailyStat' | 'transactions'>

definePageMeta({
  title: 'Products',
  description: 'See your list of products'
})

const { data, errors } = await useListProducts()

if (errors) {
  throw createError({
    statusCode: 403,
    statusMessage: 'Error Listing Products.'
  })
}

const products = computed(() => data?.listProducts?.items as Array<ProductsProps> | undefined)
// const isLoading = computed(() => {
//   console.log(!Boolean(products.value?.length), pending.value);
//   return !Boolean(products.value?.length) || !pending.value
// })

const uploadProducts = async () => {
  const auth = useAuthenticator()

  await useFetch('/api/load/products', {
    method: 'post',
    body: {
      q: auth.user.username
    }
  })
}
</script>

<template>
  <VContainer style="min-height: 80vh; height: 100%;">
    <VRow v-if="Boolean(products?.length)" align="stretch" justify="start">
      <VCol v-for="product in products"
        :key="product!.id" cols="12" sm="6" md="4" lg="3">
        <ProductCard v-bind="product" />
      </VCol>
    </VRow>
    <VRow v-else align="center" justify="center" style="min-height: inherit;">
      <VBtn @click="uploadProducts" color="secondary">Load Products</VBtn>
    </VRow>
  </VContainer>
</template>
