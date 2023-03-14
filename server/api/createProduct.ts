import { API } from "aws-amplify";
import { createProduct } from '@/graphql/mutations';

export default defineEventHandler(async () => {
  const newProduct = await API.graphql({
    query: createProduct,
    variables: {
      input: {
        id: "63701d24f03239c72c00018e",
        type: "PRODUCT",
        name: "Port Beckley",
        price: 311.71,
        descriptio: "Revision of Nonaut Sub in Mouth/Throat, Via Opening",
        category: "clothing",
        rating: 1.15,
        supply: 1320,
      }
    }
  });

  return newProduct
})
