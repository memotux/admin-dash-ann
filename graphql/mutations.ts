/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
export const createOverallSales = /* GraphQL */ `
  mutation CreateOverallSales(
    $input: CreateOverallSalesInput!
    $condition: ModelOverallSalesConditionInput
  ) {
    createOverallSales(input: $input, condition: $condition) {
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
export const updateOverallSales = /* GraphQL */ `
  mutation UpdateOverallSales(
    $input: UpdateOverallSalesInput!
    $condition: ModelOverallSalesConditionInput
  ) {
    updateOverallSales(input: $input, condition: $condition) {
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
export const deleteOverallSales = /* GraphQL */ `
  mutation DeleteOverallSales(
    $input: DeleteOverallSalesInput!
    $condition: ModelOverallSalesConditionInput
  ) {
    deleteOverallSales(input: $input, condition: $condition) {
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
export const createProductTransactions = /* GraphQL */ `
  mutation CreateProductTransactions(
    $input: CreateProductTransactionsInput!
    $condition: ModelProductTransactionsConditionInput
  ) {
    createProductTransactions(input: $input, condition: $condition) {
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
export const updateProductTransactions = /* GraphQL */ `
  mutation UpdateProductTransactions(
    $input: UpdateProductTransactionsInput!
    $condition: ModelProductTransactionsConditionInput
  ) {
    updateProductTransactions(input: $input, condition: $condition) {
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
export const deleteProductTransactions = /* GraphQL */ `
  mutation DeleteProductTransactions(
    $input: DeleteProductTransactionsInput!
    $condition: ModelProductTransactionsConditionInput
  ) {
    deleteProductTransactions(input: $input, condition: $condition) {
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
