<script setup lang="ts">
const route = useRoute()

useSeoMeta({
  title: route.meta.title as string || 'Page Title',
  description: route.meta.description as string || 'Page description here...'
})
</script>

<template>
  <VApp>
    <Sidebar />

    <Topbar />

    <VMain style="min-height: 300px;">
      <VContainer style="min-height: 300px;">
        <Header :title="$route.meta.title as string || 'Page Title'"
          :description="$route.meta.description as string || 'Page description here...'" />
        <slot />
      </VContainer>
    </VMain>
  </VApp>
</template>