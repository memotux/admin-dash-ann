<script setup lang="ts">
import { useTheme } from "vuetify";
import { plot, geo, graticule } from '@observablehq/plot';
import type { ExtendedFeatureCollection } from "d3-geo";

const theme = useTheme()

const props = defineProps<{ data: ExtendedFeatureCollection }>()

const container = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const svg = plot({
    projection: 'equirectangular',
    marks: [
      graticule(),
      geo(props.data, {
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
    color: {
      type: "sqrt",
      n: 8,
      scheme: "oranges",
      label: "Users",
      legend: true,
      style: {
        background: 'transparent'
      }
    }
  })

  container.value?.append(svg)
})
</script>

<template>
  <div ref="container"></div>
</template>