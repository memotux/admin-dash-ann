<script lang="ts" setup>
definePageMeta({
  title: 'Products',
  description: 'See your list of products'
})

const { data, pending } = useFetch('/api/listProducts')

const products = computed(() => data.value?.listProducts?.items.filter(item => item?.type === 'PRODUCT'))
const isLoading = computed(() => Boolean(products.value) || !pending.value)
</script>

<template>
  <VContainer style="min-height: 80vh; height: 100%;">
    <VRow v-if="isLoading" align="stretch" justify="start">
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
