import { withSSRContext } from "aws-amplify";
import { createTransaction } from '@/graphql/mutations';
import { dataTransaction } from '@/data'

export default defineEventHandler(async (event) => {
  console.log('starting loadTransactions');

  const SSR = withSSRContext({ req: event.node.req })

  try {
    const transactions = dataTransaction.map(async (item) => {
      const setItem = new Map(Object.entries(item)) as Map<keyof typeof item | 'id', string | number | unknown>
      setItem.delete('_id')
      setItem.delete('products')
      setItem.set('id', item._id)

      console.log('Processing Transactions: ', item._id);
      return await SSR.API.graphql({
        query: createTransaction,
        variables: {
          input: Object.fromEntries(setItem)
        },
      })
    })

    await Promise.all(transactions)
  } catch (error) {
    console.info('We have a problem...')
    console.error(error);
  }
})
