/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductTransactionsInput = {
  id?: string | null,
  productId: string,
  transactionId: string,
};

export type ModelProductTransactionsConditionInput = {
  productId?: ModelIDInput | null,
  transactionId?: ModelIDInput | null,
  and?: Array< ModelProductTransactionsConditionInput | null > | null,
  or?: Array< ModelProductTransactionsConditionInput | null > | null,
  not?: ModelProductTransactionsConditionInput | null,
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

export type ProductTransactions = {
  __typename: "ProductTransactions",
  id: string,
  productId: string,
  transactionId: string,
  product: Product,
  transaction: Transaction,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
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
  transactions?: ModelProductTransactionsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ProductStatDate = {
  __typename: "ProductStatDate",
  month?: string | null,
  date?: string | null,
  totalSales: number,
  totalUnits: number,
  _id?: string | null,
};

export type ModelProductTransactionsConnection = {
  __typename: "ModelProductTransactionsConnection",
  items:  Array<ProductTransactions | null >,
  nextToken?: string | null,
};

export type Transaction = {
  __typename: "Transaction",
  id: string,
  userId: string,
  cost?: number | null,
  products?: ModelProductTransactionsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  cost?: ModelFloatInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
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

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  occupation?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  role?: ModelUserRolesInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
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

export type ModelUserRolesInput = {
  eq?: UserRoles | null,
  ne?: UserRoles | null,
};

export enum UserRoles {
  user = "user",
  admin = "admin",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  email: string,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  occupation?: string | null,
  phoneNumber?: string | null,
  transactions?: ModelTransactionConnection | null,
  role: UserRoles,
  createdAt: string,
  updatedAt: string,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateProductInput = {
  id?: string | null,
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

export type ProductStatDateInput = {
  month?: string | null,
  date?: string | null,
  totalSales: number,
  totalUnits: number,
  _id?: string | null,
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
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  email: string,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  occupation?: string | null,
  phoneNumber?: string | null,
  role: UserRoles,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  occupation?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  role?: ModelUserRolesInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  occupation?: string | null,
  phoneNumber?: string | null,
  role?: UserRoles | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTransactionInput = {
  id?: string | null,
  userId: string,
  cost?: number | null,
};

export type ModelTransactionConditionInput = {
  userId?: ModelIDInput | null,
  cost?: ModelFloatInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionInput = {
  id: string,
  userId?: string | null,
  cost?: number | null,
};

export type DeleteTransactionInput = {
  id: string,
};

export type CreateOverallSalesInput = {
  year: number,
  id?: string | null,
  totalCustomers?: number | null,
  yearlySalesTotal?: number | null,
  yearlyTotalSoldUnits?: number | null,
  monthlyData?: Array< ProductStatDateInput | null > | null,
  dailyData?: Array< ProductStatDateInput | null > | null,
  salesByCategory?: SalesCategoriesInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  v?: number | null,
};

export type SalesCategoriesInput = {
  shoes?: number | null,
  clothing?: number | null,
  accessories?: number | null,
  misc?: number | null,
};

export type ModelOverallSalesConditionInput = {
  year?: ModelIntInput | null,
  totalCustomers?: ModelIntInput | null,
  yearlySalesTotal?: ModelIntInput | null,
  yearlyTotalSoldUnits?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  v?: ModelIntInput | null,
  and?: Array< ModelOverallSalesConditionInput | null > | null,
  or?: Array< ModelOverallSalesConditionInput | null > | null,
  not?: ModelOverallSalesConditionInput | null,
};

export type OverallSales = {
  __typename: "OverallSales",
  year: number,
  id: string,
  totalCustomers?: number | null,
  yearlySalesTotal?: number | null,
  yearlyTotalSoldUnits?: number | null,
  monthlyData?:  Array<ProductStatDate | null > | null,
  dailyData?:  Array<ProductStatDate | null > | null,
  salesByCategory?: SalesCategories | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  v?: number | null,
};

export type SalesCategories = {
  __typename: "SalesCategories",
  shoes?: number | null,
  clothing?: number | null,
  accessories?: number | null,
  misc?: number | null,
};

export type UpdateOverallSalesInput = {
  year?: number | null,
  id: string,
  totalCustomers?: number | null,
  yearlySalesTotal?: number | null,
  yearlyTotalSoldUnits?: number | null,
  monthlyData?: Array< ProductStatDateInput | null > | null,
  dailyData?: Array< ProductStatDateInput | null > | null,
  salesByCategory?: SalesCategoriesInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  v?: number | null,
};

export type DeleteOverallSalesInput = {
  id: string,
};

export type UpdateProductTransactionsInput = {
  id: string,
  productId?: string | null,
  transactionId?: string | null,
};

export type DeleteProductTransactionsInput = {
  id: string,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
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

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelOverallSalesFilterInput = {
  year?: ModelIntInput | null,
  id?: ModelIDInput | null,
  totalCustomers?: ModelIntInput | null,
  yearlySalesTotal?: ModelIntInput | null,
  yearlyTotalSoldUnits?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  v?: ModelIntInput | null,
  and?: Array< ModelOverallSalesFilterInput | null > | null,
  or?: Array< ModelOverallSalesFilterInput | null > | null,
  not?: ModelOverallSalesFilterInput | null,
};

export type ModelOverallSalesConnection = {
  __typename: "ModelOverallSalesConnection",
  items:  Array<OverallSales | null >,
  nextToken?: string | null,
};

export type ModelProductTransactionsFilterInput = {
  id?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  transactionId?: ModelIDInput | null,
  and?: Array< ModelProductTransactionsFilterInput | null > | null,
  or?: Array< ModelProductTransactionsFilterInput | null > | null,
  not?: ModelProductTransactionsFilterInput | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
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

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  occupation?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionTransactionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  cost?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
};

export type ModelSubscriptionOverallSalesFilterInput = {
  year?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  totalCustomers?: ModelSubscriptionIntInput | null,
  yearlySalesTotal?: ModelSubscriptionIntInput | null,
  yearlyTotalSoldUnits?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  v?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionOverallSalesFilterInput | null > | null,
  or?: Array< ModelSubscriptionOverallSalesFilterInput | null > | null,
};

export type ModelSubscriptionProductTransactionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productId?: ModelSubscriptionIDInput | null,
  transactionId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductTransactionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductTransactionsFilterInput | null > | null,
};

export type CustomCreateProductTransactionsMutationVariables = {
  input: CreateProductTransactionsInput,
  condition?: ModelProductTransactionsConditionInput | null,
};

export type CustomCreateProductTransactionsMutation = {
  createProductTransactions?:  {
    __typename: "ProductTransactions",
    id: string,
    productId: string,
    transactionId: string,
  } | null,
};

export type CustomListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CustomListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      userId: string,
      cost?: number | null,
      products?:  {
        __typename: "ModelProductTransactionsConnection",
        items:  Array< {
          __typename: "ProductTransactions",
          productId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CustomCountTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CustomCountTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CountUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CountUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      country?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserTransactionsQueryVariables = {
  role: UserRoles,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserTransactionsQuery = {
  userByRole?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email: string,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      occupation?: string | null,
      phoneNumber?: string | null,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          userId: string,
          cost?: number | null,
          products?:  {
            __typename: "ModelProductTransactionsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      role: UserRoles,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
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
      _id?: string | null,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    transactions?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      _id?: string | null,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    transactions?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      _id?: string | null,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    transactions?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    occupation?: string | null,
    phoneNumber?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        userId: string,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    role: UserRoles,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    occupation?: string | null,
    phoneNumber?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        userId: string,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    role: UserRoles,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    occupation?: string | null,
    phoneNumber?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        userId: string,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    role: UserRoles,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    userId: string,
    cost?: number | null,
    products?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    userId: string,
    cost?: number | null,
    products?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    userId: string,
    cost?: number | null,
    products?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOverallSalesMutationVariables = {
  input: CreateOverallSalesInput,
  condition?: ModelOverallSalesConditionInput | null,
};

export type CreateOverallSalesMutation = {
  createOverallSales?:  {
    __typename: "OverallSales",
    year: number,
    id: string,
    totalCustomers?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    dailyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    salesByCategory?:  {
      __typename: "SalesCategories",
      shoes?: number | null,
      clothing?: number | null,
      accessories?: number | null,
      misc?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    v?: number | null,
  } | null,
};

export type UpdateOverallSalesMutationVariables = {
  input: UpdateOverallSalesInput,
  condition?: ModelOverallSalesConditionInput | null,
};

export type UpdateOverallSalesMutation = {
  updateOverallSales?:  {
    __typename: "OverallSales",
    year: number,
    id: string,
    totalCustomers?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    dailyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    salesByCategory?:  {
      __typename: "SalesCategories",
      shoes?: number | null,
      clothing?: number | null,
      accessories?: number | null,
      misc?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    v?: number | null,
  } | null,
};

export type DeleteOverallSalesMutationVariables = {
  input: DeleteOverallSalesInput,
  condition?: ModelOverallSalesConditionInput | null,
};

export type DeleteOverallSalesMutation = {
  deleteOverallSales?:  {
    __typename: "OverallSales",
    year: number,
    id: string,
    totalCustomers?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    dailyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    salesByCategory?:  {
      __typename: "SalesCategories",
      shoes?: number | null,
      clothing?: number | null,
      accessories?: number | null,
      misc?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    v?: number | null,
  } | null,
};

export type CreateProductTransactionsMutationVariables = {
  input: CreateProductTransactionsInput,
  condition?: ModelProductTransactionsConditionInput | null,
};

export type CreateProductTransactionsMutation = {
  createProductTransactions?:  {
    __typename: "ProductTransactions",
    id: string,
    productId: string,
    transactionId: string,
    product:  {
      __typename: "Product",
      id: string,
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
        _id?: string | null,
      } | null > | null,
      dailyStat?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
        _id?: string | null,
      } | null > | null,
      transactions?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    transaction:  {
      __typename: "Transaction",
      id: string,
      userId: string,
      cost?: number | null,
      products?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProductTransactionsMutationVariables = {
  input: UpdateProductTransactionsInput,
  condition?: ModelProductTransactionsConditionInput | null,
};

export type UpdateProductTransactionsMutation = {
  updateProductTransactions?:  {
    __typename: "ProductTransactions",
    id: string,
    productId: string,
    transactionId: string,
    product:  {
      __typename: "Product",
      id: string,
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
        _id?: string | null,
      } | null > | null,
      dailyStat?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
        _id?: string | null,
      } | null > | null,
      transactions?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    transaction:  {
      __typename: "Transaction",
      id: string,
      userId: string,
      cost?: number | null,
      products?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProductTransactionsMutationVariables = {
  input: DeleteProductTransactionsInput,
  condition?: ModelProductTransactionsConditionInput | null,
};

export type DeleteProductTransactionsMutation = {
  deleteProductTransactions?:  {
    __typename: "ProductTransactions",
    id: string,
    productId: string,
    transactionId: string,
    product:  {
      __typename: "Product",
      id: string,
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
        _id?: string | null,
      } | null > | null,
      dailyStat?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
        _id?: string | null,
      } | null > | null,
      transactions?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    transaction:  {
      __typename: "Transaction",
      id: string,
      userId: string,
      cost?: number | null,
      products?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
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
      _id?: string | null,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    transactions?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
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
        _id?: string | null,
      } | null > | null,
      dailyStat?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
        _id?: string | null,
      } | null > | null,
      transactions?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    occupation?: string | null,
    phoneNumber?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        userId: string,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    role: UserRoles,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email: string,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      occupation?: string | null,
      phoneNumber?: string | null,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      role: UserRoles,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserByRoleQueryVariables = {
  role: UserRoles,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByRoleQuery = {
  userByRole?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email: string,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      occupation?: string | null,
      phoneNumber?: string | null,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      role: UserRoles,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    userId: string,
    cost?: number | null,
    products?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      userId: string,
      cost?: number | null,
      products?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TransactionsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TransactionsByUserIdQuery = {
  transactionsByUserId?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      userId: string,
      cost?: number | null,
      products?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOverallSalesQueryVariables = {
  id: string,
};

export type GetOverallSalesQuery = {
  getOverallSales?:  {
    __typename: "OverallSales",
    year: number,
    id: string,
    totalCustomers?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    dailyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    salesByCategory?:  {
      __typename: "SalesCategories",
      shoes?: number | null,
      clothing?: number | null,
      accessories?: number | null,
      misc?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    v?: number | null,
  } | null,
};

export type ListOverallSalesQueryVariables = {
  filter?: ModelOverallSalesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOverallSalesQuery = {
  listOverallSales?:  {
    __typename: "ModelOverallSalesConnection",
    items:  Array< {
      __typename: "OverallSales",
      year: number,
      id: string,
      totalCustomers?: number | null,
      yearlySalesTotal?: number | null,
      yearlyTotalSoldUnits?: number | null,
      monthlyData?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
        _id?: string | null,
      } | null > | null,
      dailyData?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
        _id?: string | null,
      } | null > | null,
      salesByCategory?:  {
        __typename: "SalesCategories",
        shoes?: number | null,
        clothing?: number | null,
        accessories?: number | null,
        misc?: number | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      v?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductTransactionsQueryVariables = {
  id: string,
};

export type GetProductTransactionsQuery = {
  getProductTransactions?:  {
    __typename: "ProductTransactions",
    id: string,
    productId: string,
    transactionId: string,
    product:  {
      __typename: "Product",
      id: string,
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
        _id?: string | null,
      } | null > | null,
      dailyStat?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
        _id?: string | null,
      } | null > | null,
      transactions?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    transaction:  {
      __typename: "Transaction",
      id: string,
      userId: string,
      cost?: number | null,
      products?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProductTransactionsQueryVariables = {
  filter?: ModelProductTransactionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductTransactionsQuery = {
  listProductTransactions?:  {
    __typename: "ModelProductTransactionsConnection",
    items:  Array< {
      __typename: "ProductTransactions",
      id: string,
      productId: string,
      transactionId: string,
      product:  {
        __typename: "Product",
        id: string,
        owner: string,
        name?: string | null,
        price?: number | null,
        description?: string | null,
        category?: string | null,
        rating?: number | null,
        supply?: number | null,
        yearlySalesTotal?: number | null,
        yearlyTotalSoldUnits?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      transaction:  {
        __typename: "Transaction",
        id: string,
        userId: string,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductTransactionsByProductIdQueryVariables = {
  productId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductTransactionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductTransactionsByProductIdQuery = {
  productTransactionsByProductId?:  {
    __typename: "ModelProductTransactionsConnection",
    items:  Array< {
      __typename: "ProductTransactions",
      id: string,
      productId: string,
      transactionId: string,
      product:  {
        __typename: "Product",
        id: string,
        owner: string,
        name?: string | null,
        price?: number | null,
        description?: string | null,
        category?: string | null,
        rating?: number | null,
        supply?: number | null,
        yearlySalesTotal?: number | null,
        yearlyTotalSoldUnits?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      transaction:  {
        __typename: "Transaction",
        id: string,
        userId: string,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductTransactionsByTransactionIdQueryVariables = {
  transactionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductTransactionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductTransactionsByTransactionIdQuery = {
  productTransactionsByTransactionId?:  {
    __typename: "ModelProductTransactionsConnection",
    items:  Array< {
      __typename: "ProductTransactions",
      id: string,
      productId: string,
      transactionId: string,
      product:  {
        __typename: "Product",
        id: string,
        owner: string,
        name?: string | null,
        price?: number | null,
        description?: string | null,
        category?: string | null,
        rating?: number | null,
        supply?: number | null,
        yearlySalesTotal?: number | null,
        yearlyTotalSoldUnits?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      transaction:  {
        __typename: "Transaction",
        id: string,
        userId: string,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
      _id?: string | null,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    transactions?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      _id?: string | null,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    transactions?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      _id?: string | null,
    } | null > | null,
    dailyStat?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    transactions?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    occupation?: string | null,
    phoneNumber?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        userId: string,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    role: UserRoles,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    occupation?: string | null,
    phoneNumber?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        userId: string,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    role: UserRoles,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    occupation?: string | null,
    phoneNumber?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        userId: string,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    role: UserRoles,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    userId: string,
    cost?: number | null,
    products?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    userId: string,
    cost?: number | null,
    products?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    userId: string,
    cost?: number | null,
    products?:  {
      __typename: "ModelProductTransactionsConnection",
      items:  Array< {
        __typename: "ProductTransactions",
        id: string,
        productId: string,
        transactionId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOverallSalesSubscriptionVariables = {
  filter?: ModelSubscriptionOverallSalesFilterInput | null,
};

export type OnCreateOverallSalesSubscription = {
  onCreateOverallSales?:  {
    __typename: "OverallSales",
    year: number,
    id: string,
    totalCustomers?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    dailyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    salesByCategory?:  {
      __typename: "SalesCategories",
      shoes?: number | null,
      clothing?: number | null,
      accessories?: number | null,
      misc?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    v?: number | null,
  } | null,
};

export type OnUpdateOverallSalesSubscriptionVariables = {
  filter?: ModelSubscriptionOverallSalesFilterInput | null,
};

export type OnUpdateOverallSalesSubscription = {
  onUpdateOverallSales?:  {
    __typename: "OverallSales",
    year: number,
    id: string,
    totalCustomers?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    dailyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    salesByCategory?:  {
      __typename: "SalesCategories",
      shoes?: number | null,
      clothing?: number | null,
      accessories?: number | null,
      misc?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    v?: number | null,
  } | null,
};

export type OnDeleteOverallSalesSubscriptionVariables = {
  filter?: ModelSubscriptionOverallSalesFilterInput | null,
};

export type OnDeleteOverallSalesSubscription = {
  onDeleteOverallSales?:  {
    __typename: "OverallSales",
    year: number,
    id: string,
    totalCustomers?: number | null,
    yearlySalesTotal?: number | null,
    yearlyTotalSoldUnits?: number | null,
    monthlyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    dailyData?:  Array< {
      __typename: "ProductStatDate",
      month?: string | null,
      date?: string | null,
      totalSales: number,
      totalUnits: number,
      _id?: string | null,
    } | null > | null,
    salesByCategory?:  {
      __typename: "SalesCategories",
      shoes?: number | null,
      clothing?: number | null,
      accessories?: number | null,
      misc?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    v?: number | null,
  } | null,
};

export type OnCreateProductTransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionProductTransactionsFilterInput | null,
  owner?: string | null,
};

export type OnCreateProductTransactionsSubscription = {
  onCreateProductTransactions?:  {
    __typename: "ProductTransactions",
    id: string,
    productId: string,
    transactionId: string,
    product:  {
      __typename: "Product",
      id: string,
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
        _id?: string | null,
      } | null > | null,
      dailyStat?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
        _id?: string | null,
      } | null > | null,
      transactions?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    transaction:  {
      __typename: "Transaction",
      id: string,
      userId: string,
      cost?: number | null,
      products?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProductTransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionProductTransactionsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProductTransactionsSubscription = {
  onUpdateProductTransactions?:  {
    __typename: "ProductTransactions",
    id: string,
    productId: string,
    transactionId: string,
    product:  {
      __typename: "Product",
      id: string,
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
        _id?: string | null,
      } | null > | null,
      dailyStat?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
        _id?: string | null,
      } | null > | null,
      transactions?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    transaction:  {
      __typename: "Transaction",
      id: string,
      userId: string,
      cost?: number | null,
      products?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProductTransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionProductTransactionsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProductTransactionsSubscription = {
  onDeleteProductTransactions?:  {
    __typename: "ProductTransactions",
    id: string,
    productId: string,
    transactionId: string,
    product:  {
      __typename: "Product",
      id: string,
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
        _id?: string | null,
      } | null > | null,
      dailyStat?:  Array< {
        __typename: "ProductStatDate",
        month?: string | null,
        date?: string | null,
        totalSales: number,
        totalUnits: number,
        _id?: string | null,
      } | null > | null,
      transactions?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    transaction:  {
      __typename: "Transaction",
      id: string,
      userId: string,
      cost?: number | null,
      products?:  {
        __typename: "ModelProductTransactionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
