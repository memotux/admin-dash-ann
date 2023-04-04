import { API } from 'aws-amplify'
import { listOverallSales } from "@/graphql/queries";
import type { ListOverallSalesQueryVariables } from '~~/graphql/types';
import type { GraphQLResult } from "@aws-amplify/api-graphql";
import type { FetchError } from 'ofetch';

const overallQueries = { listOverallSales }

interface ListCustomersParams extends ListOverallSalesQueryVariables {
  query: keyof typeof overallQueries
}

export function useListOverall<D>({ filter, limit, nextToken, query }: ListCustomersParams) {
  return useAsyncData<GraphQLResult<D>, FetchError, D | undefined>(`api:list:overall:${unref(query)}`, async () => {
    return await API.graphql<ListOverallSalesQueryVariables>({
      query: overallQueries[unref(query)],
      variables: {
        nextToken,
        filter: filter !== undefined ? JSON.parse(filter as string) : filter,
        limit: limit !== undefined && typeof limit === 'string' ? parseInt(limit) : limit,
      }
    }) as GraphQLResult<D>
  }, {
    transform: (input) => input.data
  })
}
