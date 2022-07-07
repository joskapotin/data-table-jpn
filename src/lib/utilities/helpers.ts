import type { Entries } from "../types"

type SortEntries = {
  entries: Entries
  sortBy: string | null | undefined
  sortDirection: string | null | undefined
}

/**
 * It takes in a string, check if it is a valid date and return the result
 */
export const isDate = (date: string) => !Number.isNaN(Date.parse(date))

/**
 * It sorts an array of objects by a given key and direction
 * If the key values are dates it will sort them by date
 */
export const sortEntries = ({ entries, sortBy, sortDirection }: SortEntries) => {
  if (!sortDirection || !sortBy) return entries
  return [...entries].sort((a, b) => {
    const firstValue = isDate(a[sortBy]) ? new Date(a[sortBy]) : a[sortBy]
    const secondValue = isDate(b[sortBy]) ? new Date(b[sortBy]) : b[sortBy]

    if (sortDirection === "asc") {
      return firstValue > secondValue ? 1 : -1
    }
    return firstValue < secondValue ? 1 : -1
  })
}

/**
 * It takes in an array of objects and a string, and returns an array of objects that contain the
 * string
 */
export const filterEntries = (entries: Entries, filter: string) => {
  if (!filter) return entries
  return entries.filter(entry => Object.values(entry).find(value => value.toLowerCase().includes(filter.toLowerCase())))
}
