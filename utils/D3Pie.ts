import { map, range, InternSet, schemeSpectral, quantize, interpolateSpectral, scaleOrdinal, format as d3format, pie, arc, create } from "d3";
import type { DefaultArcObject } from "d3";

type PlotPieData = [string, number]
interface PlotPieOptions {
  name?: (data: PlotPieData) => PlotPieData[0]
  value?: (data: PlotPieData) => PlotPieData[1]
  title?: ((i: any) => string) | ((o: any, i?: any, d?: PlotPieData[]) => string)
  width?: number
  height?: number
  innerRadius?: number
  outerRadius?: number
  labelRadius?: number
  format?: any
  names?: string[] | Set<string>
  colors?: readonly (readonly string[])[] | readonly string[] | Iterable<string>
  stroke?: string
  strokeWidth?: number
  strokeLinejoin?: string
  padAngle?: number
}

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/donut-chart
export function DonutChart(
  data: Array<PlotPieData>,
  {
    name = ([x]) => x, // given d in data, returns the (ordinal) label
    value = ([, y]) => y, // given d in data, returns the (quantitative) value
    title, // given d in data, returns the title text
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    innerRadius = Math.min(width, height) / 3, // inner radius of pie, in pixels (non-zero for donut)
    outerRadius = Math.min(width, height) / 2, // outer radius of pie, in pixels
    labelRadius = (innerRadius + outerRadius) / 2, // center radius of labels
    format = ',', // a format specifier for values (in the label)
    names, // array of names (the domain of the color scale)
    colors, // array of colors for names
    stroke = innerRadius > 0 ? 'none' : 'white', // stroke separating widths
    strokeWidth = 1, // width of stroke separating wedges
    strokeLinejoin = 'round', // line join of stroke separating wedges
    padAngle = stroke === 'none' ? 1 / outerRadius : 0, // angular separation between wedges
  }: PlotPieOptions
) {
  // Compute values.
  const N = map(data, name)
  const V = map(data, value)
  const I = range(N.length).filter((i) => !isNaN(V[i]))

  // Unique the names.
  if (names === undefined) names = N
  names = new InternSet(names)

  // Chose a default color scheme based on cardinality.
  if (colors === undefined) colors = schemeSpectral[names.size]
  if (colors === undefined)
    colors = quantize(
      (t) => interpolateSpectral(t * 0.8 + 0.1),
      names.size
    )

  // Construct scales.
  const color = scaleOrdinal(names, colors as string[])

  // Compute titles.
  if (title === undefined) {
    const formatValue = d3format(format)
    title = (i: number) => `${N[i]}\n${formatValue(V[i])}`
  } else {
    const O = map(data, (d) => d)
    const T = title
    title = (i: number) => T(O[i], i, data)
  }

  // Construct arcs.
  const arcs = pie()
    .padAngle(padAngle)
    .sort(null)
    .value((i) => V[i as number])(I)
  const arc2 = arc().innerRadius(innerRadius).outerRadius(outerRadius)
  const arcLabel = arc().innerRadius(labelRadius).outerRadius(labelRadius)

  const svg = create('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [-width / 2, -height / 2, width, height])
    .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')

  svg
    .append('g')
    .attr('stroke', stroke)
    .attr('stroke-width', strokeWidth)
    .attr('stroke-linejoin', strokeLinejoin)
    .selectAll('path')
    .data(arcs)
    .join('path')
    .attr('fill', (d) => color(N[d.data as number]))
    .attr('d', arc2 as unknown as number)
    .append('title')
    .text((d) => title!(d.data))

  svg
    .append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', '1rem')
    .attr('text-anchor', 'middle')
    .selectAll('text')
    .data(arcs)
    .join('text')
    .attr('transform', (d) => `translate(${arcLabel.centroid(d as unknown as DefaultArcObject)})`)
    .selectAll('tspan')
    .data((d) => {
      const lines = `${title!(d.data)}`.split(/\n/)
      return d.endAngle - d.startAngle > 0.25 ? lines : lines.slice(0, 1)
    })
    .join('tspan')
    .attr('x', 0)
    .attr('y', (_, i) => `${i * 1.1}em`)
    .attr('font-weight', (_, i) => (i ? null : 'bold'))
    .text((d) => d)

  return Object.assign(svg.node()!, { scales: { color } })
}
