import { ActionTypes } from "./action-types"

const setTotalPages = (totalPages: number) => ({
  type: ActionTypes.SET_TOTAL_PAGES as const,
  payload: totalPages,
})

const setFilterResults = (filterResults: number) => ({
  type: ActionTypes.SET_FILTER_RESULTS as const,
  payload: filterResults,
})

export { setTotalPages, setFilterResults }
