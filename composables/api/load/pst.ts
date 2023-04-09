import { API } from "aws-amplify";
import { customCreateProductTransactions } from "@/graphql/customs";
import { dataTransaction } from '@/data'

export async function useLoadPst() {
  try {
    const productsTransactions: any[] = []

    dataTransaction.forEach((transaction, idx) => {
      transaction.products.forEach((product) => {
        console.log('Processing product: ', product, '. Transaction: ', transaction._id, idx);
        productsTransactions.push(API.graphql({
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
}
