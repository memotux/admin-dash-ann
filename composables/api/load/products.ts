import { API } from "aws-amplify";
import { createProduct, updateProduct } from '@/graphql/mutations';
import { dataProductStat, dataProduct } from '@/data'

const productMutations = { create: createProduct, update: updateProduct }

export async function useLoadProducts(
  u: string,
  q: 'create' | 'update' = 'create'
) {
  if (!u) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Not a valid query.'
    })
  }
  try {
    const slice = dataProduct.map(async (item, idx) => {
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

      console.log('Processing Product: ', idx, item._id);

      return await API.graphql({
        query: productMutations[q],
        variables: {
          input: Object.fromEntries(setItem)
        },
      })
    })

    return await Promise.all(slice)
  } catch (error) {
    console.info('We have a problem...')
    console.error(error);
  }
}
