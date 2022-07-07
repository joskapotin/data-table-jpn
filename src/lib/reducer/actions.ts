import type { ActionTypes } from "./action-types"

export type SetPageSize = {
  type: ActionTypes.SET_PAGE_SIZE
  payload: number
}

export type SetTotalPages = {
  type: ActionTypes.SET_TOTAL_PAGES
  payload: number
}

export type SetFilterResults = {
  type: ActionTypes.SET_FILTER_RESULTS
  payload: number
}

export type Action = SetPageSize | SetTotalPages | SetFilterResults
