import { ActionTypes } from "./action-types"

const setCurrentPage = (currentPage: number) => ({
  type: ActionTypes.SET_CURRENT_PAGE as const,
  payload: currentPage,
})

const setTotalPages = (totalPages: number) => ({
  type: ActionTypes.SET_TOTAL_PAGES as const,
  payload: totalPages,
})

const setPageSize = (pageSize: number) => ({
  type: ActionTypes.SET_PAGE_SIZE as const,
  payload: pageSize,
})

const setFilter = (filter: string) => ({
  type: ActionTypes.SET_FILTER as const,
  payload: filter,
})

const setFilterResults = (filterResults: number) => ({
  type: ActionTypes.SET_FILTER_RESULTS as const,
  payload: filterResults,
})

const setSortBy = (sortBy: string) => ({
  type: ActionTypes.SET_SORTBY as const,
  payload: sortBy,
})

const setSortDirection = (sortDirection: "asc" | "desc" | "none") => ({
  type: ActionTypes.SET_SORTDIRECTION as const,
  payload: sortDirection,
})

export { setCurrentPage, setTotalPages, setPageSize, setFilter, setFilterResults, setSortBy, setSortDirection }
