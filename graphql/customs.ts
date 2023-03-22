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