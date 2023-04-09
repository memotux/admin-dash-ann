<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue';
import { Auth, Hub } from 'aws-amplify'

let removeListener = () => { return }

const ui = useUi()

onMounted(async () => {
  removeListener = Hub.listen('auth', authListener)
  const user = await Auth.currentAuthenticatedUser()
  ui.value.isAuth = Boolean(user?.username)
})

onUnmounted(() => { removeListener() })

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
      <VContainer class="h-100">
        <VRow justify="center" align="center" class="h-100">
          <Authenticator hide-sign-up>
            <Header :title="$route.meta.title as string || 'Page Title'"
              :description="$route.meta.description as string || 'Page description here...'" />
            <slot />
          </Authenticator>
        </VRow>
      </VContainer>
    </VMain>
  </VApp>
</template>

<style>
:root {
  --amplify-colors-background-primary: rgb(var(--v-theme-primary-500));
  --amplify-colors-brand-primary-10: rgb(var(--v-theme-primary-100));
  --amplify-colors-brand-primary-20: rgb(var(--v-theme-primary-200));
  --amplify-colors-brand-primary-40: rgb(var(--v-theme-primary-400));
  --amplify-colors-brand-primary-60: rgb(var(--v-theme-primary-600));
  --amplify-colors-brand-primary-80: rgb(var(--v-theme-primary-700));
  --amplify-colors-brand-primary-90: rgb(var(--v-theme-primary-800));
  --amplify-colors-brand-primary-100: rgb(var(--v-theme-primary-900));
}

.amplify-label {
  --amplify-components-field-label-color: var(--amplify-colors-brand-primary-10);
}
</style>