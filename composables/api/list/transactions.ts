import {
  listTransactions,
  listProductTransactions,
  productTransactionsByProductId,
  productTransactionsByTransactionId,
  getTransaction
} from "@/graphql/queries";
import { customListTransactions, customCountTransactions } from "@/graphql/customs";
import awsconfig from '@/aws-exports'
import type {
  ListTransactionsQueryVariables,
  ProductTransactionsByProductIdQueryVariables,
  ProductTransactionsByTransactionIdQueryVariables,
  GetTransactionQueryVariables,
} from '~~/graphql/types';
import type { Optional } from '~~/index';
import type { FetchError } from 'ofetch';

export type ListTransactionsParams = Optional<GetTransactionQueryVariables, 'id'> &
  ListTransactionsQueryVariables &
  Optional<ProductTransactionsByProductIdQueryVariables, 'productId'> &
  Optional<ProductTransactionsByTransactionIdQueryVariables, 'transactionId'> &
{ query: keyof typeof transactionQueries }

const transactionQueries = {
  listT: listTransactions,
  customListT: customListTransactions,
  listPT: listProductTransactions,
  listPTxP: productTransactionsByProductId,
  listPTxT: productTransactionsByTransactionId,
  getT: getTransaction,
  countT: customCountTransactions
}

export function useListTransactions<D>({ id, filter, limit, nextToken, productId, sortDirection, transactionId, query }: ListTransactionsParams) {

  return useFetch<{ data: D }, FetchError, string, 'post'>(awsconfig.aws_appsync_graphqlEndpoint, {
    key: `api:list:transactions:${unref(query)}`,
    method: 'post',
    headers: {
      'x-api-key': awsconfig.aws_appsync_apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: transactionQueries[unref(query)],
      variables: {
        id,
        nextToken,
        productId,
        transactionId,
        sortDirection,
        filter: filter !== undefined ? JSON.parse(filter as string) : filter,
        limit: limit !== undefined && typeof limit === 'string' ? parseInt(limit) : limit,
      }
    })
  })
}