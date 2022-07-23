import type { SortDirection } from "../models"
import type { ActionTypes } from "./action-types"

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
  payload?: string
}

export type SetSortBy = {
  type: ActionTypes.SET_SORTBY
  payload?: string
}

export type SetSortDirection = {
  type: ActionTypes.SET_SORTDIRECTION
  payload?: SortDirection
}

export type Action = SetCurrentPage | SetTotalPages | SetPageSize | SetFilter | SetSortBy | SetSortDirection
