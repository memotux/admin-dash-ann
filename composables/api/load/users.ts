import { API } from "aws-amplify";
import { createUser } from '@/graphql/mutations';
import { dataUser } from '@/data'

export async function useLoadUsers() {
  try {
    const slice = dataUser.map(async (item, idx) => {
      const setItem = new Map(Object.entries(item)) as Map<keyof typeof item | 'id', string | number | unknown>
      setItem.delete('_id')
      setItem.delete('password')
      setItem.delete('transactions')
      // setItem.delete('phoneNumber')
      setItem.set('id', item._id)
      setItem.set('role', item.role !== 'user' ? 'admin' : 'user')

      console.log('Processing Customer: ', idx, item._id);

      return await API.graphql({
        query: createUser,
        variables: {
          input: Object.fromEntries(setItem)
        },
      })
    })

    return await Promise.all(slice)
  } catch (error) {
    console.info('We have a problem...')
    console.error(error);
  }
}
