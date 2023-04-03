import { API } from 'aws-amplify'
import { listOverallSales } from "@/graphql/queries";
import type { ListOverallSalesQueryVariables } from '~~/graphql/types';
import type { GraphQLResult } from "@aws-amplify/api-graphql";

const overallQueries = { listOverallSales }

interface ListCustomersParams extends ListOverallSalesQueryVariables {
  query: 'listOverallSales'
}

export async function useListOverall<T>({ filter, limit, nextToken, query }: ListCustomersParams) {
  try {
    const { data, errors } = await API.graphql({
      query: overallQueries[query],
      variables: {
        nextToken,
        filter: filter !== undefined ? JSON.parse(filter as string) : filter,
        limit: limit !== undefined && typeof limit === 'string' ? parseInt(limit) : limit,
      },
      authMode: 'API_KEY'
    }) as GraphQLResult<T>

    if (errors) {
      throw errors
    }
    if (!data) {
      throw new Error("There is no DATA!");
    }

    return data
  } catch (error: any) {
    console.error(error);

    throw createError({
      statusCode: 404,
      statusMessage: error.errors[0].message
    })

  }
}
