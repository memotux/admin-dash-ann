<script lang="ts" setup>
definePageMeta({
  title: 'Products',
  description: 'See your list of products'
})

const { data, pending } = useFetch('/api/listProducts')

const products = computed(() => data.value?.listProducts?.items.filter(item => item?.type === 'PRODUCT'))

</script>

<template>
  <VContainer>
    <VRow v-if="products || !pending" align="stretch" justify="start">
      <VCol v-for="product in products"
        :key="product!.id" cols="12" md="4" lg="3">
        <ProductCard v-bind="product" />
      </VCol>
    </VRow>
  </VContainer>
</template>
