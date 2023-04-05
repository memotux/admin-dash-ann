<script setup lang="ts">
import { useTheme, useDisplay } from "vuetify"

const theme = useTheme()
const display = useDisplay()
const ui = useUi()

const drawerColor = computed(() => theme.global.current.value.dark ? 'primary-500' : 'primary-600')
</script>

<template>
  <VAppBar :color="drawerColor">
    <VContainer v-if="ui.isAuth" fluid>
      <VRow justify="space-between" align="center">
        <VCol cols="9" lg="3" class="d-flex align-center">
          <VAppBarTitle v-if="display.mobile.value || !ui.drawer">
            <VBtn to="/" :active="false">
              <h1 class="text-h5 font-weight-bold">TUXMIN</h1>
            </VBtn>
          </VAppBarTitle>
          <VTextField
            density="compact"
            variant="plain"
            label="Search"
            append-inner-icon="mdi:mdi-magnify"
            single-line
            hide-details />
        </VCol>
        <VCol class="text-right">
          <TopbarBtn v-if="!display.mobile.value" is-topbar />
          <VAppBarNavIcon @click="() => { ui.drawer = !ui.drawer }" />
        </VCol>
      </VRow>
    </VContainer>
  </VAppBar>
</template>