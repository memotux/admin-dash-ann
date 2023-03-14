import { API, Auth } from "aws-amplify";
import { createProduct } from '@/graphql/mutations';
import { dataProductStat } from '@/data'

export default defineEventHandler(async () => {
  try {
    const user = await Auth.currentAuthenticatedUser()

    const slice = dataProductStat.map(async (item) => {
      const setItem = new Map(Object.entries(item)) as Map<keyof typeof item | 'id' | 'type' | 'owner' | 'monthlyStat' | 'dailyStat', string | number | unknown>
      setItem.delete('_id')
      setItem.delete('monthlyData')
      setItem.delete('dailyData')
      setItem.delete('productId')
      setItem.set('id', item.productId)
      setItem.set('type', "PRODUCTSTAT")
      setItem.set('owner', user.username)
      setItem.set('monthlyStat', item.monthlyData)
      setItem.set('dailyStat', item.dailyData)

      console.log('Processing Product Stat: ', item.productId);

      return await API.graphql({
        query: createProduct,
        variables: {
          input: Object.fromEntries(setItem)
        }
      })
    })

    return await Promise.all(slice)
  } catch (error) {
    console.info('We have a problem...')
    console.error(error);
  }
})
