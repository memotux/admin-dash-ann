// @ts-ignore
import { getObjectValueByPath } from "vuetify/lib/util/helpers";

import type { Transaction } from "@/graphql/types";

export interface SortItem { key: string, order?: boolean | 'asc' | 'desc' }

export const formatDate = (date: Date, region = 'en-US', options: Intl.DateTimeFormatOptions = { dateStyle: 'medium', timeStyle: 'medium' }) => new Intl.DateTimeFormat(region, options).format(date)

export const formatCurrency = (amount: number, region = 'en-US', currency = 'USD') => new Intl.NumberFormat(region, {
  style: "currency",
  currency: currency,
}).format(amount)

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