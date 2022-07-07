import { ActionTypes } from "./action-types"
import type { Action } from "./actions"
import type { DataTableState } from "../types"

export const initialState: DataTableState = {
  labels: [],
  entries: [],
  pageSize: 10,
  totalPages: 0,
  filterResults: 0,
}

export default function reducer(state: DataTableState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload, currentPage: 1 }
    case ActionTypes.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload }
    case ActionTypes.SET_FILTER_RESULTS:
      return { ...state, filterResults: action.payload }
    default:
      return state
  }
}
