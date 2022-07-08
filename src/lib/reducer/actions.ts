import type { ActionTypes } from "./action-types"
import type { Entries } from "../models"

export type SetCurrentPage = {
  type: ActionTypes.SET_CURRENT_PAGE
  payload: number
}

export type SetTotalPages = {
  type: ActionTypes.SET_TOTAL_PAGES
  payload: number
}

export type SetPageSize = {
  type: ActionTypes.SET_PAGE_SIZE
  payload: number
}

export type SetFilter = {
  type: ActionTypes.SET_FILTER
  payload: string
}

export type SetFilterResults = {
  type: ActionTypes.SET_FILTER_RESULTS
  payload: Entries
}

export type SetSortBy = {
  type: ActionTypes.SET_SORTBY
  payload: string
}

export type SetSortDirection = {
  type: ActionTypes.SET_SORTDIRECTION
  payload: "asc" | "desc" | "none"
}

export type Action = SetCurrentPage | SetTotalPages | SetPageSize | SetFilter | SetFilterResults | SetSortBy | SetSortDirection
