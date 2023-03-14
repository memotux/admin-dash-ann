/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id: string,
  type: DataType,
  owner: string,
  name?: string | null,
  price?: number | null,
  description?: string | null,
  category?: string | null,
  rating?: number | null,
  supply?: number | null,
  yearlySalesTotal?: number | null,
  yearlyTotalSoldUnits?: number | null,
  monthlyStat?: Array< ProductStatDateInput | null > | null,
  dailyStat?: Array< ProductStatDateInput | null > | null,
};

export enum DataType {
  PRODUCT = "PRODUCT",
  PRODUCTSTAT = "PRODUCTSTAT",
}


export type ProductStatDateInput = {
  month?: string | null,
  date?: string | null,
  totalSales: number,
  totalUnits: number,
};

export type Product = {
  __typename: "Product",
  id: string,
  type: DataType,
  owner: string,
  name?: string | null,
  price?: number | null,
  description?: string | null,
  category?: string | null,
  rating?: number | null,
  supply?: number | null,
  yearlySalesTotal?: number | null,
  yearlyTotalSoldUnits?: number | null,
  monthlyStat?:  Array<ProductStatDate | null > | null,
  dailyStat?:  Array<ProductStatDate | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type ProductStatDate = {
  __typename: "ProductStatDate",
  month?: string | null,
  date?: string | null,
  totalSales: number,
  totalUnits: number,
};

export type ModelProductConditionInput = {
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  supply?: ModelIntInput | null,
  yearlySalesTotal?: ModelIntInput | null,
  yearlyTotalSoldUnits?: ModelIntInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductInput = {
  id: string,
  type: DataType,
  owner?: string | null,
  name?: string | null,
  price?: number | null,
  description?: string | null,
  category?: string | null,
  rating?: number | null,
  supply?: number | null,
  yearlySalesTotal?: number | null,
  yearlyTotalSoldUnits?: number | null,
  monthlyStat?: Array< ProductStatDateInput | null > | null,
  dailyStat?: Array< ProductStatDateInput | null > | null,
};

export type DeleteProductInput = {
  id: string,
  type: DataType,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelDataTypeInput | null,
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  supply?: ModelIntInput | null,
  yearlySalesTotal?: ModelIntInput | null,
  yearlyTotalSoldUnits?: ModelIntInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDataTypeInput = {
  eq?: DataType | null,
  ne?: DataType | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  supply?: ModelSubscriptionIntInput | null,
  yearlySalesTotal?: ModelSubscriptionIntInput | null,
  yearlyTotalSoldUnits?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type BatchAddProductsMutationVariables = {
  posts?: Array< CreateProductInput | null > | null,
};

export type BatchAddProductsMutation = {
  batchAddProducts?:  Array< {
    __typename: "Product",
    id: string,
    type: DataType,
    owner: string,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    category?: string | null,
    rating?: number | null,
    supply?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    type: DataType,
    owner: string,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    category?: string | null,
    rating?: number | null,
    supply?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    type: DataType,
    owner: string,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    category?: string | null,
    rating?: number | null,
    supply?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    type: DataType,
    owner: string,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    category?: string | null,
    rating?: number | null,
    supply?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
  type: DataType,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    type: DataType,
    owner: string,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    category?: string | null,
    rating?: number | null,
    supply?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  id?: string | null,
  type?: ModelStringKeyConditionInput | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      type: DataType,
      owner: string,
      name?: string | null,
      price?: number | null,
      description?: string | null,
      category?: string | null,
      rating?: number | null,
      supply?: number | null,
      yearlySalesTotal?: number | null,
      yearlyTotalSoldUnits?: number | null,
      monthlyStat?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
      } | null > | null,
      dailyStat?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    type: DataType,
    owner: string,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    category?: string | null,
    rating?: number | null,
    supply?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    type: DataType,
    owner: string,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    category?: string | null,
    rating?: number | null,
    supply?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    type: DataType,
    owner: string,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    category?: string | null,
    rating?: number | null,
    supply?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
