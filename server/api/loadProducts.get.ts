import { API } from "aws-amplify";
import { createProduct } from '@/graphql/mutations';
import { dataProductStat, dataProduct } from '@/data'

export default defineEventHandler(async (event) => {
  const { u } = getQuery(event)
  if (!u) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Not a valid user...'
    })
  }
  try {
    const slice = dataProduct.map(async (item) => {
      const setItem = new Map(Object.entries(item)) as Map<keyof typeof item | 'id' | 'type' | 'owner' | 'monthlyStat' | 'dailyStat', string | number | unknown>
      const stats = dataProductStat.find((i) => i.productId === item._id)
      setItem.delete('_id')
      setItem.set('id', item._id)
      setItem.set('owner', u)
      if (stats) {
        setItem.set('monthlyStat', stats.monthlyData)
        setItem.set('dailyStat', stats.dailyData)
      }

      console.log('Processing Product Stat: ', item._id);

      return await API.graphql({
        query: createProduct,
        variables: {
          input: Object.fromEntries(setItem)
        },
        authMode: 'API_KEY'
      })
    })

    return await Promise.all(slice)
  } catch (error) {
    console.info('We have a problem...')
    console.error(error);
  }
})
