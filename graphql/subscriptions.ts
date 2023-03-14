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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onUpdateProduct(filter: $filter, owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onDeleteProduct(filter: $filter, owner: $owner) {
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
