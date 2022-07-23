import { filterEntries } from "../utilities/helpers"
import { ActionTypes } from "./action-types"
import type { Action } from "./actions"
import type { DataTableState } from "../models"

function reducer(state: DataTableState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case ActionTypes.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload }
    case ActionTypes.SET_PAGE_SIZE: {
      const totalPages = Math.ceil(state.filterResults.length / action.payload)
      return { ...state, pageSize: action.payload, totalPages }
    }
    case ActionTypes.SET_FILTER: {
      const filterResults = filterEntries({ entries: state.entries, filter: action.payload })
      const totalPages = Math.ceil(filterResults.length / state.pageSize)
      return { ...state, filter: action.payload, currentPage: 1, totalPages, filterResults }
    }
    case ActionTypes.SET_SORTBY:
      return { ...state, sortBy: action.payload }
    case ActionTypes.SET_SORTDIRECTION:
      return { ...state, sortDirection: action.payload }
    default:
      return state
  }
}

export default reducer
