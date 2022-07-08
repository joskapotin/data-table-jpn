import { createContext, useReducer, useMemo } from "react"
import type { Dispatch, ReactNode } from "react"
import reducer from "~/lib/reducer/reducer"
import type { Action } from "~/lib/reducer/actions"
import type { DataTableState } from "~/lib/models"

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

  const value: DataTableContextType = useMemo(
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
