import { API } from 'aws-amplify'
import { listProducts } from "@/graphql/queries";
import type { ListProductsQuery } from '~~/graphql/types';
import { GraphQLResult } from "@aws-amplify/api-graphql";

export default defineEventHandler(async () => {

  try {
    const { data } = await API.graphql({
      query: listProducts,
      authMode: 'API_KEY'
    }) as GraphQLResult<ListProductsQuery>

    return data
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.errors[0].message,
      stack: error.errors[0].locations
    })
  }
})
