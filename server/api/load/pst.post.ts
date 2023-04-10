import { withSSRContext } from "aws-amplify";
import { customCreateProductTransactions } from "@/graphql/customs";
import { dataTransaction } from '@/data'

export default defineEventHandler(async (event) => {
  const SSR = withSSRContext({ req: event.node.req })
  try {
    const productsTransactions: any[] = []

    dataTransaction.forEach((transaction, idx) => {
      transaction.products.forEach((product) => {
        console.log('Processing product: ', product, '. Transaction: ', transaction._id, idx);
        productsTransactions.push(SSR.API.graphql({
          query: customCreateProductTransactions,
          variables: {
            input: {
              productId: product,
              transactionId: transaction._id
            }
          },
        })
        )
      })
    })

    await Promise.all(productsTransactions)
  } catch (error) {
    console.info('We have a problem...')
    console.error(error);
  }
})
