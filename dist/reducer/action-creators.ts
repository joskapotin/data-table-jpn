import { ActionTypes } from "./action-types"

export const setPageSize = (pageSize: number) => ({
  type: ActionTypes.SET_PAGE_SIZE as const,
  payload: pageSize,
})

export const setTotalPages = (totalPages: number) => ({
  type: ActionTypes.SET_TOTAL_PAGES as const,
  payload: totalPages,
})

export const setFilterResults = (filterResults: number) => ({
  type: ActionTypes.SET_FILTER_RESULTS as const,
  payload: filterResults,
})
