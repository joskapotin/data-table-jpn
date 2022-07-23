import { useContext } from "react"
import { DataTableContext } from "../../contexts/dataTableContext"

function useDataTableContext() {
  const context = useContext(DataTableContext)
  if (context === undefined) {
    throw new Error("useDataTableContext must be used within a DataTableContextProvider")
  }
  return context
}

export default useDataTableContext
