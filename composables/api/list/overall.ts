import { API } from 'aws-amplify'
import { listOverallSales } from "@/graphql/queries";
import type { ListOverallSalesQueryVariables } from '~~/graphql/types';
import type { GraphQLResult } from "@aws-amplify/api-graphql";
import type { FetchError } from 'ofetch';

const overallQueries = { listOverallSales }

interface ListCustomersParams extends ListOverallSalesQueryVariables {
  query: keyof typeof overallQueries
}

export function useListOverall<D>(
  query: Ref<ListCustomersParams['query']>,
  filter: Ref<ListCustomersParams['filter']> = ref(undefined),
  nextToken: Ref<ListCustomersParams['nextToken']> = ref(undefined),
  limit: Ref<ListCustomersParams['limit']> = ref(undefined)) {

  return useAsyncData<GraphQLResult<D>, FetchError, D | undefined>(
    `api:list:overall:${unref(query)}`,
    async () => (
      await API.graphql({
        query: overallQueries[unref(query)],
        variables: {
          nextToken: unref(nextToken),
          filter: unref(filter),
          limit: unref(limit)
        }
      }) as GraphQLResult<D>
    ), {
    transform: (input) => input.data,
    watch: [query, filter, limit, nextToken]
  })
}
