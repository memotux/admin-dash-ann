import { API } from 'aws-amplify'
import { listProducts } from "@/graphql/queries";
import type { ListProductsQuery } from '~~/graphql/types';
import { GraphQLResult } from "@aws-amplify/api-graphql";

export default defineEventHandler(async (event) => {
  const { f, l, nt } = getQuery(event)

  const variables = {
    filter: Boolean(f) ? JSON.parse(f as string) : undefined,
    limit: Boolean(l) ? JSON.parse(l as string) : undefined,
    nextToken: Boolean(nt) ? JSON.parse(nt as string) : undefined
  }

  try {
    const { data, errors } = await API.graphql({
      query: listProducts,
      variables,
      authMode: 'API_KEY'
    }) as GraphQLResult<ListProductsQuery>

    if (errors) {
      throw errors
    }
    if (!data) {
      throw new Error("There is no DATA!");
    }

    return data
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.errors[0].message,
      stack: error.errors[0].locations
    })
  }
})
