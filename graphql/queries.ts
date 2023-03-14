/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!, $type: DataType!) {
    getProduct(id: $id, type: $type) {
      id
      type
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
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $id: ID
    $type: ModelStringKeyConditionInput
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      id: $id
      type: $type
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        type
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
