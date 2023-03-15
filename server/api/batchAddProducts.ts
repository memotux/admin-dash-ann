import { API } from "aws-amplify";
import { createProduct, updateProduct } from '@/graphql/mutations';
import { dataProductStat } from '@/data'

export default defineEventHandler(async () => {
  try {
    const slice = dataProductStat.map(async (item) => {
      const setItem = new Map(Object.entries(item)) as Map<keyof typeof item | 'id' | 'type' | 'owner' | 'monthlyStat' | 'dailyStat', string | number | unknown>
      setItem.delete('_id')
      setItem.delete('monthlyData')
      setItem.delete('dailyData')
      setItem.delete('productId')
      setItem.set('id', item.productId)
      setItem.set('type', "PRODUCT")
      // setItem.set('owner', user.username)
      setItem.set('monthlyStat', item.monthlyData)
      setItem.set('dailyStat', item.dailyData)

      console.log('Processing Product Stat: ', item.productId);

      return await API.graphql({
        query: updateProduct,
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
