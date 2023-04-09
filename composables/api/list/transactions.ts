import { hash } from "ohash";
import { Auth } from "aws-amplify";

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

export async function useListTransactions<D>(params: ListTransactionsParams) {

  const session = await Auth.currentSession()

  const data = ref<Ref<D> | null>(null)
  const pending = ref(true)
  const error = ref<FetchError<any> | null>(null)

  watchEffect(async () => {
    const res = await useFetch<{ data: D }, FetchError, string, 'post', { data: D }, D>(awsconfig.aws_appsync_graphqlEndpoint, {
      key: hash([`api:list:transactions`, { ...params }]),
      method: 'post',
      headers: {
        // 'x-api-key': awsconfig.aws_appsync_apiKey,
        Authorization: session.getAccessToken().getJwtToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: transactionQueries[params.query],
        variables: {
          ...params
        }
      }),
      transform: (input) => input.data,
    })

    data.value = res.data.value as D
    pending.value = res.pending.value
    error.value = res.error.value
  })

  return { data, error, pending }
}