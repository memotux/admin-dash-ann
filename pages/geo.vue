<script lang="ts" setup>
//@ts-ignore
import getCountyIso from "country-iso-2-to-3";

import type { ListUsersQuery } from "@/graphql/types";
import type { ExtendedFeatureCollection } from "d3-geo";

definePageMeta({
  title: 'Geography',
  description: 'Find where your users are located'
})

const { data, pending } = await useFetch<ListUsersQuery>('/api/listCustomers', {
  key: 'api:listCustomer:countCountry',
  query: {
    query: 'countCountry'
  }
})

const dataMap = data.value!.listUsers!.items.reduce<Map<string, number>>((acc, cur) => {
  const nameIso3 = getCountyIso(cur!.country!)
  if (!acc.has(nameIso3)) {
    acc.set(nameIso3, 0)
  }
  const newValue = acc.get(nameIso3)! + 1
  acc.set(nameIso3, newValue)

  return acc
}, new Map())

geoFeat.features.forEach((country) => {
  (country.properties as { name: string, users: number }).users = dataMap.get(country.id) || 0

  return country
})
</script>

<template>
  <VContainer>
    <VRow v-if="pending" justify="center" align="center">
      <VProgressCircular color="secondary" indeterminate />
    </VRow>
    <VRow v-else>
      <VCol cols="12">
        <PlotGeo :data="(geoFeat as ExtendedFeatureCollection)" />
      </VCol>
    </VRow>
  </VContainer>
</template>
