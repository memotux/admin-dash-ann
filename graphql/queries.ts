/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      owner
      name
      price
      description
      category
      rating
      supply
      yearlySalesTotal
      yearlyTotalSoldUnits
      monthlyStat {
        month
        date
        totalSales
        totalUnits
      }
      dailyStat {
        month
        date
        totalSales
        totalUnits
      }
      transactions {
        items {
          id
          productId
          transactionId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        name
        price
        description
        category
        rating
        supply
        yearlySalesTotal
        yearlyTotalSoldUnits
        monthlyStat {
          month
          date
          totalSales
          totalUnits
        }
        dailyStat {
          month
          date
          totalSales
          totalUnits
        }
        transactions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
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
          userId
          cost
          createdAt
          updatedAt
        }
        nextToken
      }
      role
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const userByRole = /* GraphQL */ `
  query UserByRole(
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
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      userId
      cost
      products {
        items {
          id
          productId
          transactionId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const transactionsByUserId = /* GraphQL */ `
  query TransactionsByUserId(
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProductTransactions = /* GraphQL */ `
  query GetProductTransactions($id: ID!) {
    getProductTransactions(id: $id) {
      id
      productId
      transactionId
      product {
        id
        owner
        name
        price
        description
        category
        rating
        supply
        yearlySalesTotal
        yearlyTotalSoldUnits
        monthlyStat {
          month
          date
          totalSales
          totalUnits
        }
        dailyStat {
          month
          date
          totalSales
          totalUnits
        }
        transactions {
          nextToken
        }
        createdAt
        updatedAt
      }
      transaction {
        id
        userId
        cost
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProductTransactions = /* GraphQL */ `
  query ListProductTransactions(
    $filter: ModelProductTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        transactionId
        product {
          id
          owner
          name
          price
          description
          category
          rating
          supply
          yearlySalesTotal
          yearlyTotalSoldUnits
          createdAt
          updatedAt
        }
        transaction {
          id
          userId
          cost
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const productTransactionsByProductId = /* GraphQL */ `
  query ProductTransactionsByProductId(
    $productId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productTransactionsByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        transactionId
        product {
          id
          owner
          name
          price
          description
          category
          rating
          supply
          yearlySalesTotal
          yearlyTotalSoldUnits
          createdAt
          updatedAt
        }
        transaction {
          id
          userId
          cost
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const productTransactionsByTransactionId = /* GraphQL */ `
  query ProductTransactionsByTransactionId(
    $transactionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productTransactionsByTransactionId(
      transactionId: $transactionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        transactionId
        product {
          id
          owner
          name
          price
          description
          category
          rating
          supply
          yearlySalesTotal
          yearlyTotalSoldUnits
          createdAt
          updatedAt
        }
        transaction {
          id
          userId
          cost
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
