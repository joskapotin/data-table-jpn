import type { Dispatch, ReactNode } from "react"
import { createContext, useMemo, useReducer } from "react"
import type { DataTableState } from "../models"
import type { Action } from "../reducer/actions"
import reducer from "../reducer/reducer"

type DataTableContextType = {
  state: DataTableState
  dispatch: Dispatch<Action>
}

type DataTableContextProviderProps = {
  initialState: DataTableState
  children: ReactNode
}

const DataTableContext = createContext<DataTableContextType | undefined>(undefined)

function DataTableContextProvider({ initialState, children }: DataTableContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  )

  return <DataTableContext.Provider value={value}>{children}</DataTableContext.Provider>
}

export default DataTableContextProvider
export { DataTableContext }
