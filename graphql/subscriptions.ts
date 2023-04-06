/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateOverallSales = /* GraphQL */ `
  subscription OnCreateOverallSales(
    $filter: ModelSubscriptionOverallSalesFilterInput
  ) {
    onCreateOverallSales(filter: $filter) {
      year
      id
      totalCustomers
      yearlySalesTotal
      yearlyTotalSoldUnits
      monthlyData {
        month
        date
        totalSales
        totalUnits
        _id
      }
      dailyData {
        month
        date
        totalSales
        totalUnits
        _id
      }
      salesByCategory {
        shoes
        clothing
        accessories
        misc
      }
      createdAt
      updatedAt
      v
    }
  }
`;
export const onUpdateOverallSales = /* GraphQL */ `
  subscription OnUpdateOverallSales(
    $filter: ModelSubscriptionOverallSalesFilterInput
  ) {
    onUpdateOverallSales(filter: $filter) {
      year
      id
      totalCustomers
      yearlySalesTotal
      yearlyTotalSoldUnits
      monthlyData {
        month
        date
        totalSales
        totalUnits
        _id
      }
      dailyData {
        month
        date
        totalSales
        totalUnits
        _id
      }
      salesByCategory {
        shoes
        clothing
        accessories
        misc
      }
      createdAt
      updatedAt
      v
    }
  }
`;
export const onDeleteOverallSales = /* GraphQL */ `
  subscription OnDeleteOverallSales(
    $filter: ModelSubscriptionOverallSalesFilterInput
  ) {
    onDeleteOverallSales(filter: $filter) {
      year
      id
      totalCustomers
      yearlySalesTotal
      yearlyTotalSoldUnits
      monthlyData {
        month
        date
        totalSales
        totalUnits
        _id
      }
      dailyData {
        month
        date
        totalSales
        totalUnits
        _id
      }
      salesByCategory {
        shoes
        clothing
        accessories
        misc
      }
      createdAt
      updatedAt
      v
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
        _id
      }
      dailyStat {
        month
        date
        totalSales
        totalUnits
        _id
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
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
        _id
      }
      dailyStat {
        month
        date
        totalSales
        totalUnits
        _id
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
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
        _id
      }
      dailyStat {
        month
        date
        totalSales
        totalUnits
        _id
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
export const onCreateProductTransactions = /* GraphQL */ `
  subscription OnCreateProductTransactions(
    $filter: ModelSubscriptionProductTransactionsFilterInput
  ) {
    onCreateProductTransactions(filter: $filter) {
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
          _id
        }
        dailyStat {
          month
          date
          totalSales
          totalUnits
          _id
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
  ) {
    onUpdateProductTransactions(filter: $filter) {
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
          _id
        }
        dailyStat {
          month
          date
          totalSales
          totalUnits
          _id
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
  ) {
    onDeleteProductTransactions(filter: $filter) {
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
          _id
        }
        dailyStat {
          month
          date
          totalSales
          totalUnits
          _id
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
