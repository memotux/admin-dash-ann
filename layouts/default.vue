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
      <VContainer style="min-height: 300px;">
        <Authenticator>
          <Header :title="$route.meta.title as string || 'Page Title'"
            :description="$route.meta.description as string || 'Page description here...'" />
          <slot />
        </Authenticator>
      </VContainer>
    </VMain>
  </VApp>
</template>