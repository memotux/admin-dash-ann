import { API } from "aws-amplify";
import { customCreateProductTransactions } from "@/graphql/customs";
import { dataTransaction } from '@/data'

export async function useLoadPst() {
  try {
    const productsTransactions: any[] = []

    dataTransaction.slice(1).forEach(transaction => {
      transaction.products.forEach((product) => {
        console.log('Processing product: ', product, '. Transaction: ', transaction._id);
        productsTransactions.push(API.graphql({
          query: customCreateProductTransactions,
          variables: {
            input: {
              productId: product,
              transactionId: transaction._id
            }
          },
          authMode: 'API_KEY'
        })
        )
      })
    })

    await Promise.all(productsTransactions)
  } catch (error) {
    console.info('We have a problem...')
    console.error(error);
  }
}
