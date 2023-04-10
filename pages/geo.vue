<script lang="ts" setup>
import { useTheme } from "vuetify";
//@ts-ignore
import { geo, graticule } from '@observablehq/plot';
//@ts-ignore
import getCountyIso from "country-iso-2-to-3";

import type { ListUsersQuery } from "@/graphql/types";

definePageMeta({
  title: 'Geography',
  description: 'Find where your users are located'
})

const theme = useTheme()

const { data } = await useListUsers<ListUsersQuery>({
  query: 'countCountry'
})

const dataMap = data?.listUsers?.items.reduce<Map<string, number>>((acc, cur) => {
  const nameIso3 = getCountyIso(cur!.country!)
  if (!acc.has(nameIso3)) {
    acc.set(nameIso3, 0)
  }
  const newValue = acc.get(nameIso3)! + 1
  acc.set(nameIso3, newValue)

  return acc
}, new Map())

geoFeat.features.forEach((country) => {
  (country.properties as { name: string, users: number }).users = dataMap?.get(country.id) || 0

  return country
})

const plot = {
  projection: 'equirectangular',
  marks: [
    graticule(),
    geo(geoFeat, {
      // @ts-ignore
      fill: (d: any) => d.properties.users,
      title: (d: any) => d.properties.name + ": " + d.properties.users,
      stroke: theme.current.value.colors.primary,
      strokeWidth: 0.5
    }),
    /**
     * Add text to every feature but look bad
     */
    // text(
    //   geoFeat.features,
    //   centroid({
    //     // @ts-ignore
    //     text: (d: any) => `${d.properties.name}: ${d.properties.users}`,
    //     textAnchor: "middle",
    //     stroke: 'white',
    //     strokeWidth: 0.2,
    //     fill: theme.current.value.colors['primary-500'],
    //     fontSize: '0.45rem',
    //     filter: (d: any) => d.properties.users > 0
    //   })
    // )
  ],
  style: {
    background: "transparent",
    width: '100%'
  },
  className: 'plot-geo-chart',
  color: {
    type: "sqrt",
    n: 8,
    scheme: "oranges",
    label: "Users",
    legend: true,
    style: {
      background: 'transparent'
    },
    ticks: [0, 5, 15, 25, 35, 50]
  }
}
</script>

<template>
  <VContainer>
    <VRow v-if="!data?.listUsers?.items.length" justify="center" align="center">
      <h2>Sorry! There is NO DATA to show.</h2>
    </VRow>
    <VRow v-else>
      <VCol cols="12">
        <Plot v-bind="plot" />
      </VCol>
    </VRow>
  </VContainer>
</template>
