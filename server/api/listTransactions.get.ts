import { API } from 'aws-amplify'
import {
  listTransactions,
  listProductTransactions,
  productTransactionsByProductId,
  productTransactionsByTransactionId,
  getTransaction
} from "@/graphql/queries";
import { customListTransactions, customCountTransactions } from "@/graphql/customs";
import type {
  ListTransactionsQuery,
  ListTransactionsQueryVariables,
  ListProductTransactionsQuery,
  ProductTransactionsByProductIdQuery,
  ProductTransactionsByProductIdQueryVariables,
  ProductTransactionsByTransactionIdQuery,
  ProductTransactionsByTransactionIdQueryVariables,
  GetTransactionQueryVariables,
  GetTransactionQuery
} from '~~/graphql/types';
import type { GraphQLResult } from "@aws-amplify/api-graphql";

type ListTransactionsParams = GetTransactionQueryVariables &
  ListTransactionsQueryVariables &
  ProductTransactionsByProductIdQueryVariables &
  ProductTransactionsByTransactionIdQueryVariables &
{ query: 'listT' | 'listPT' | 'listPTxP' | 'listPTxT' | 'customListT' | 'getT' | 'countT' }

const transactionQueries = {
  listT: listTransactions,
  customListT: customListTransactions,
  listPT: listProductTransactions,
  listPTxP: productTransactionsByProductId,
  listPTxT: productTransactionsByTransactionId,
  getT: getTransaction,
  countT: customCountTransactions
}

export default defineEventHandler(async (event) => {
  const { id, filter, limit, nextToken, productId, sortDirection, transactionId, query } = getQuery(event) as unknown as ListTransactionsParams

  try {
    const { data, errors } = await API.graphql({
      query: transactionQueries[query],
      variables: {
        id,
        nextToken,
        productId,
        transactionId,
        sortDirection,
        filter: filter !== undefined ? JSON.parse(filter as string) : filter,
        limit: limit !== undefined && typeof limit === 'string' ? parseInt(limit) : limit,
      },
      authMode: 'API_KEY'
    }) as GraphQLResult<GetTransactionQuery | ListTransactionsQuery | ListProductTransactionsQuery | ProductTransactionsByProductIdQuery | ProductTransactionsByTransactionIdQuery>

    if (errors) {
      throw errors
    }
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: 'There is no DATA!'
      })
    }

    return data
  } catch (error: any) {
    console.error(error);

    throw createError({
      statusCode: 400,
      statusMessage: error.errors[0].message
    })
  }
})
