import { ListOverallSalesQuery } from "~~/graphql/types";

export function useOverallStats() {
  return useFetch<ListOverallSalesQuery>('/api/list/overall', {
    query: {
      query: 'listOverallSales'
    }
  })
}