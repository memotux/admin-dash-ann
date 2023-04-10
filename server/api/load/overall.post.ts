import { withSSRContext } from "aws-amplify";
import { createOverallSales } from '@/graphql/mutations';
import { dataOverallStat } from '@/data'

export default defineEventHandler(async (event) => {
  const SSR = withSSRContext({ req: event.node.req })

  try {
    const overallSales = dataOverallStat.map((item, idx) => {
      const setItem = new Map(Object.entries(item)) as Map<keyof typeof item | 'id' | 'v', string | number | unknown>
      setItem.delete('_id')
      setItem.delete('__v')
      setItem.set('id', item._id)
      setItem.set('v', item.__v)

      console.log('Processing OverallSale: ', idx + 1);

      return SSR.API.graphql({
        query: createOverallSales,
        variables: {
          input: Object.fromEntries(setItem)
        },
      })
    })

    return await Promise.all(overallSales)
  } catch (error: any) {
    console.error(error);
    throw createError({
      statusCode: 403,
      statusMessage: 'Error creating Overall Stats',
    })
  }
})
