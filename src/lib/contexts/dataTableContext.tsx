import { createContext, useContext, useReducer, useMemo } from "react"
import type { Dispatch, ReactNode } from "react"
import reducer, { initialState } from "../reducer/reducer"
import type { Action } from "../reducer/actions"
import type { DataTableState, Data } from "../models"

type DataTableContextType = {
  state: DataTableState
  dispatch: Dispatch<Action>
}

type DataTableContextProviderProps = {
  data: Data
  children: ReactNode
}

const DataTableContext = createContext<DataTableContextType | undefined>(undefined)

function DataTableContextProvider({ data, children }: DataTableContextProviderProps) {
  const init: DataTableState = {
    ...initialState,
    ...data,
    totalPages: Math.ceil(data.entries.length / initialState.pageSize),
    filterResults: data.entries,
  }
  const [state, dispatch] = useReducer(reducer, init)
  const value: DataTableContextType = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  )

  return <DataTableContext.Provider value={value}>{children}</DataTableContext.Provider>
}

function useDataTableContext() {
  const context = useContext(DataTableContext)
  if (context === undefined) {
    throw new Error("useDataTableContext must be used within a CountProvider")
  }
  return context
}

export default DataTableContextProvider
export { useDataTableContext }
