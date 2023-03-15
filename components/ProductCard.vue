<script setup lang="ts">
const props = defineProps<{
  id: string,
  name?: string | null,
  price?: number | null,
  description?: string | null,
  category?: string | null,
  rating?: number | null,
  supply?: number | null,
  yearlySalesTotal?: number | null,
  yearlyTotalSoldUnits?: number | null,
}>()
const show = ref(false)
const stars = ref(props.rating as number)
const toggleStats = () => { show.value = !show.value }
</script>

<template>
  <VCard
    class="mx-auto"
    max-width="344"
    variant="tonal">
    <VCardText class="text-overline text-right secondary-700">
      {{ category }}
    </VCardText>
    <VCardTitle class="text-h5 font-weigth-bold">
      {{ name }}
    </VCardTitle>

    <VCardSubtitle class="text-h6">
      ${{ Number(price).toFixed(2) }}
    </VCardSubtitle>

    <VRating v-model="stars" disabled half-increments color="secondary-600" />

    <VCardActions>
      <VSpacer />

      <VBtn
        :prepend-icon="show ? 'mdi:mdi-chevron-up' : 'mdi:mdi-chevron-down'"
        @click="toggleStats">More</VBtn>
    </VCardActions>

    <VExpandTransition>
      <div v-show="show">
        <VDivider />

        <VList class="bg-primary-700">
          <VListItem disabled>
            <VListItemTitle>ID:
            </VListItemTitle>
            <template #append>
              <VChip color="secondary">{{ id }}</VChip>
            </template>
          </VListItem>
          <VListItem disabled>
            <VListItemTitle>Supply Left:</VListItemTitle>
            <template #append>
              <VChip color="secondary">{{ supply }}</VChip>
            </template>
          </VListItem>
          <VListItem disabled>
            <VListItemTitle>Yearly Sales This Year:</VListItemTitle>
            <template #append>
              <VChip color="secondary">{{ yearlySalesTotal }}</VChip>
            </template>
          </VListItem>
          <VListItem disabled>
            <VListItemTitle>Yearly Units Sold This Year:</VListItemTitle>
            <template #append>
              <VChip color="secondary">{{ yearlyTotalSoldUnits }}</VChip>
            </template>
          </VListItem>
        </VList>
      </div>
    </VExpandTransition>
  </VCard>
</template>