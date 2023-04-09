import { API } from 'aws-amplify'
import { listProducts } from "@/graphql/queries";
import type { ListProductsQuery, ListProductsQueryVariables } from '~~/graphql/types';
import type { GraphQLQuery } from "@aws-amplify/api";

export async function useListProducts(
  filter?: ListProductsQueryVariables['filter'],
  limit?: ListProductsQueryVariables['limit'],
  nextToken?: ListProductsQueryVariables['nextToken']
) {

  try {
    return await API.graphql<GraphQLQuery<ListProductsQuery>>({
      query: listProducts,
      variables: {
        filter,
        limit,
        nextToken
      },
    })
  } catch (error: any) {
    console.error(error)

    throw createError({
      statusCode: 400,
      statusMessage: error.errors[0].message,
      stack: error.errors[0].locations
    })
  }
}
