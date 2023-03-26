import { API } from "aws-amplify";
import { createOverallSales } from '@/graphql/mutations';
import { dataOverallStat } from '@/data'
import type { CreateOverallSalesMutation } from "~~/graphql/types";

export default defineEventHandler(async () => {
  try {
    const overallSales = dataOverallStat.map(async (item, idx) => {
      const setItem = new Map(Object.entries(item)) as Map<keyof typeof item | 'id' | 'v', string | number | unknown>
      setItem.delete('_id')
      setItem.delete('__v')
      setItem.set('id', item._id)
      setItem.set('v', item.__v)

      console.log('Processing OverallSale: ', idx + 1);

      return await API.graphql<CreateOverallSalesMutation>({
        query: createOverallSales,
        variables: {
          input: Object.fromEntries(setItem)
        },
        authMode: 'API_KEY'
      })
    })

    return await Promise.all(overallSales)
  } catch (error: any) {
    console.error(error);

    // throw createError({
    //   statusCode: 400,
    //   statusMessage: error.errors[0].message
    // })
  }
})
