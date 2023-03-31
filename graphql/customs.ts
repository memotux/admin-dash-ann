export const customCreateProductTransactions = /* GraphQL */ `
  mutation CustomCreateProductTransactions(
    $input: CreateProductTransactionsInput!
    $condition: ModelProductTransactionsConditionInput
  ) {
    createProductTransactions(input: $input, condition: $condition) {
      id
      productId
      transactionId
    }
  }
`;

export const customListTransactions = /* GraphQL */ `
  query CustomListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        cost
        products {
          items {
          productId
        }
        nextToken
        }
        createdAt
      }
      nextToken
    }
  }
`;

export const customCountTransactions = /* GraphQL */ `
  query CustomCountTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
      }
      nextToken
    }
  }
`;

export const countUsers = /* GraphQL */ `
  query CountUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        country
      }
      nextToken
    }
  }
`;

export const userTransactions = /* GraphQL */ `
  query UserTransactions(
    $role: UserRoles!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByRole(
      role: $role
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        city
        state
        country
        occupation
        phoneNumber
        transactions {
          items {
            id
            userId
            cost
            products {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        role
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getUserTransactions = /* GraphQL */ `
  query GetUserTransactions($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      city
      state
      country
      occupation
      phoneNumber
      transactions {
          items {
            id
            cost
            products {
              items {
                id
              }
              nextToken
            }
          }
          nextToken
        }
      role
      createdAt
      updatedAt
    }
  }
`;

export const transactionsByUser = /* GraphQL */ `
  query TransactionsByUser(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        cost
        products {
          items {
            id
          }
          nextToken
        }
        createdAt
      }
      nextToken
    }
  }
`;