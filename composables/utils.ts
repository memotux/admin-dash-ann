import { Transaction } from "@/graphql/types";

export interface SortItem { key: string, order?: boolean | 'asc' | 'desc' }

export const formatDate = (date: Date, region = 'en-US', options: Intl.DateTimeFormatOptions = { dateStyle: 'medium', timeStyle: 'medium' }) => new Intl.DateTimeFormat(region, options).format(date)

export const formatCurrency = (amount: number, region = 'en-US', currency = 'USD') => new Intl.NumberFormat(region, {
  style: "currency",
  currency: currency,
}).format(amount)


function getNestedValue(obj: any, path: (string | number)[], fallback?: any): any {
  const last = path.length - 1

  if (last < 0) return obj === undefined ? fallback : obj

  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback
    }
    obj = obj[path[i]]
  }

  if (obj == null) return fallback

  return obj[path[last]] === undefined ? fallback : obj[path[last]]
}

function getObjectValueByPath(obj: any, path: string, fallback?: any): any {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (obj == null || !path || typeof path !== 'string') return fallback
  if (obj[path] !== undefined) return obj[path]
  path = path.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
  path = path.replace(/^\./, '') // strip a leading dot
  return getNestedValue(obj, path.split('.'), fallback)
}

export function sortItems<T extends Transaction>(
  items: T[],
  sortByItems: readonly SortItem[],
  locale: string
): T[] {
  const stringCollator = new Intl.Collator(locale, { sensitivity: 'accent', usage: 'sort' })

  return [...items].sort((a, b) => {
    for (let i = 0; i < sortByItems.length; i++) {
      const sortKey = sortByItems[i].key
      const sortOrder = sortByItems[i].order

      if (sortOrder === false) continue

      let sortA = getObjectValueByPath(a, sortKey)
      let sortB = getObjectValueByPath(b, sortKey)

      if (sortOrder === 'desc') {
        [sortA, sortB] = [sortB, sortA]
      }

      // Check if both cannot be evaluated
      if (sortA == null || sortB == null) {
        continue
      }

      // Dates should be compared numerically
      if (sortA instanceof Date && sortB instanceof Date) {
        return sortA.getTime() - sortB.getTime()
      }

      [sortA, sortB] = [sortA, sortB].map(s => (s || '').toString().toLocaleLowerCase())

      if (sortA !== sortB) {
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB)
        return stringCollator.compare(sortA, sortB)
      }
    }

    return 0
  })
}