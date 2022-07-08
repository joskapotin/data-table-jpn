import type { Entries } from "../models"

export type IsDateFunction = (date: string) => boolean

export type SortEntriesProps = {
  entries: Entries
  sortBy?: string
  sortDirection?: string
}

export type SortEntriesFunction = (props: SortEntriesProps) => Entries

export type FilterEntriesProps = {
  entries: Entries
  filter?: string
}

export type FilterEntriesFunction = (props: FilterEntriesProps) => Entries

/**
 * It takes in a string, check if it is a valid date and return the result
 */
const isDate: IsDateFunction = date => !Number.isNaN(Date.parse(date))

/**
 * It sorts an array of objects by a given key and direction
 * If the key values are dates it will sort them by date
 */
const sortEntries: SortEntriesFunction = ({ entries, sortBy, sortDirection }) => {
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
 * It takes in an array of objects and a string, and returns an array of objects that contain the string
 */
const filterEntries: FilterEntriesFunction = ({ entries, filter }) => {
  if (!filter) return entries
  return entries.filter(entry => Object.values(entry).find(value => value.toLowerCase().includes(filter.toLowerCase())))
}

export { isDate, sortEntries, filterEntries }
