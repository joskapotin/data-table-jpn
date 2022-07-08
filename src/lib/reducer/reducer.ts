import { ActionTypes } from "./action-types"
import type { Action } from "./actions"
import type { DataTableState } from "../models"

const initialState: DataTableState = {
  labels: [],
  entries: [],
  totalPages: 0,
  filterResults: 0,
}

function reducer(state: DataTableState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload }
    case ActionTypes.SET_FILTER_RESULTS:
      return { ...state, filterResults: action.payload }
    default:
      return state
  }
}

export default reducer
export { initialState }
