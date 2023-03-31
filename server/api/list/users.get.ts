import { API } from 'aws-amplify'
import { listUsers, userByRole, getUser } from "@/graphql/queries";
import { countUsers, userTransactions, transactionsByUser } from "@/graphql/customs";
import type { GetUserQuery, ListUsersQuery, ListUsersQueryVariables, TransactionsByUserIdQuery, UserByRoleQuery, UserRoles } from '~~/graphql/types';
import type { GraphQLResult } from "@aws-amplify/api-graphql";

const usersQuery = { listUsers, userByRole, countCountry: countUsers, userTransactions, getUser, transactionsByUser }

interface ListCustomersParams extends ListUsersQueryVariables {
  query: keyof typeof usersQuery
  role?: UserRoles
  id: string
  userId: string
}

export default defineEventHandler(async (event) => {
  const { filter, limit, nextToken, role, query, id, userId } = getQuery(event) as unknown as ListCustomersParams

  try {
    const { data, errors } = await API.graphql({
      query: usersQuery[query],
      variables: {
        id,
        userId,
        role,
        nextToken,
        filter: filter !== undefined ? JSON.parse(filter as string) : filter,
        limit: limit !== undefined && typeof limit === 'string' ? parseInt(limit) : limit,
      },
      authMode: 'API_KEY'
    }) as GraphQLResult<ListUsersQuery | UserByRoleQuery | GetUserQuery | TransactionsByUserIdQuery>

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