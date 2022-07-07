import type { Dispatch, ReactNode } from "react"
import { createContext, useContext, useReducer, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import type { URLSearchParamsInit } from "react-router-dom"
import reducer, { initialState } from "../reducer/reducer"
import type { Action } from "../reducer/actions"
import type { DataTableState, Table } from "../types"

type DataTableContextType =
  | {
      state: DataTableState
      dispatch: Dispatch<Action>
      searchParams: URLSearchParams
      setSearchParams: (
        nextInit: URLSearchParamsInit,
        navigateOptions?:
          | {
              replace?: boolean | undefined
              state?: any
            }
          | undefined
      ) => void
    }
  | undefined

type DataTableContextProviderProps = {
  table: Table
  children: ReactNode
}

const DataTableContext = createContext<DataTableContextType>(undefined)

export default function DataTableContextProvider({ table, children }: DataTableContextProviderProps) {
  const init: DataTableState = { ...initialState, ...table }
  const [state, dispatch] = useReducer(reducer, init)
  const [searchParams, setSearchParams] = useSearchParams()
  const value: DataTableContextType = useMemo(
    () => ({
      state,
      dispatch,
      searchParams,
      setSearchParams,
    }),
    [state, dispatch, searchParams, setSearchParams]
  )

  return <DataTableContext.Provider value={value}>{children}</DataTableContext.Provider>
}

export function useDataTableContext() {
  const context = useContext(DataTableContext)
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider")
  }
  return context
}
