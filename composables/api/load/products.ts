import { API } from "aws-amplify";
import { createProduct, updateProduct } from '@/graphql/mutations';
import { dataProductStat, dataProduct } from '@/data'

const productMutations = { create: createProduct, update: updateProduct }

interface CreateProductsPayload {
  u: string
  q: 'create' | 'update'
}

export async function useLoadProducts({ u, q }: CreateProductsPayload) {
  if (!u) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Not a valid user...'
    })
  }
  try {
    const slice = dataProduct.map(async (item) => {
      const setItem = new Map(Object.entries(item)) as Map<keyof typeof item | 'id' | 'type' | 'owner' | 'monthlyStat' | 'dailyStat' | 'yearlyTotalSoldUnits' | 'yearlySalesTotal', string | number | unknown>
      const stats = dataProductStat.find((i) => i.productId === item._id)
      setItem.delete('_id')
      setItem.set('id', item._id)
      setItem.set('owner', u)
      if (stats) {
        setItem.set('monthlyStat', stats.monthlyData)
        setItem.set('dailyStat', stats.dailyData)
        setItem.set('yearlySalesTotal', stats.yearlySalesTotal)
        setItem.set('yearlyTotalSoldUnits', stats.yearlyTotalSoldUnits)
      }

      console.log('Processing Product Stat: ', item._id);

      return await API.graphql({
        query: productMutations[q || 'create'],
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
}
