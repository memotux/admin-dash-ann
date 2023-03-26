import { API } from 'aws-amplify'
import { listUsers, userByRole } from "@/graphql/queries";
import { countUsers } from "@/graphql/customs";
import type { ListUsersQuery, ListUsersQueryVariables, UserByRoleQuery, UserRoles } from '~~/graphql/types';
import { GraphQLResult } from "@aws-amplify/api-graphql";

const usersQuery = { listUsers, userByRole, countCountry: countUsersContry }

interface ListCustomersParams extends ListUsersQueryVariables {
  query: 'listUsers' | 'userByRole' | 'countCountry'
  role?: UserRoles
}

export default defineEventHandler(async (event) => {
  const { filter, limit, nextToken, role, query } = getQuery(event) as unknown as ListCustomersParams

  try {
    const { data, errors } = await API.graphql({
      query: usersQuery[query],
      variables: {
        role,
        nextToken,
        filter: filter !== undefined ? JSON.parse(filter as string) : filter,
        limit: limit !== undefined && typeof limit === 'string' ? parseInt(limit) : limit,
      },
      authMode: 'API_KEY'
    }) as GraphQLResult<ListUsersQuery | UserByRoleQuery>

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
})
