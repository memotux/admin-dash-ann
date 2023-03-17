/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onCreateProduct(filter: $filter, owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onUpdateProduct(filter: $filter, owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onDeleteProduct(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onCreateTransaction(filter: $filter) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onUpdateTransaction(filter: $filter) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onDeleteTransaction(filter: $filter) {
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
export const onCreateProductTransactions = /* GraphQL */ `
  subscription OnCreateProductTransactions(
    $filter: ModelSubscriptionProductTransactionsFilterInput
    $owner: String
  ) {
    onCreateProductTransactions(filter: $filter, owner: $owner) {
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
export const onUpdateProductTransactions = /* GraphQL */ `
  subscription OnUpdateProductTransactions(
    $filter: ModelSubscriptionProductTransactionsFilterInput
    $owner: String
  ) {
    onUpdateProductTransactions(filter: $filter, owner: $owner) {
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
export const onDeleteProductTransactions = /* GraphQL */ `
  subscription OnDeleteProductTransactions(
    $filter: ModelSubscriptionProductTransactionsFilterInput
    $owner: String
  ) {
    onDeleteProductTransactions(filter: $filter, owner: $owner) {
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
