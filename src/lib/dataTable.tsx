import { useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import Filter from "./components/filter/filter"
import Info from "./components/info/info"
import PageSize from "./components/page-size/page-size"
import Paginate from "./components/paginate/paginate"
import Table from "./components/table/table"
import options from "./constants/options"
import DataTableContextProvider from "./contexts/dataTableContext"
import "./dataTable.css"
import type { Data, DataTableState } from "./models"

type DataTableProps = {
  data: Data
}

function DataTable({ data }: DataTableProps) {
  /* The table need an unique id to be identify from the pagination. For accessibility purposes */
  const tableId = uuidv4()

  /**
   * Create the initial state of the table.
   */
  const initialState = useMemo(() => {
    const { labels, entries, sortBy, sortDirection } = data
    const pageSize = options.pageSizeOptions[0]
    const totalPages = Math.ceil(entries.length / pageSize)
    const filterResults = entries.length
    return {
      labels,
      entries,
      currentPage: 1,
      pageSize,
      totalPages,
      filterResults,
      sortBy,
      sortDirection,
    } as DataTableState
  }, [data])

  return (
    <DataTableContextProvider initialState={initialState}>
      <div className="dataTable_wrapper d-grid">
        <div className="dataTable_header mt-3 mb-2 d-flex justify-content-between align-items-center">
          <PageSize />
          <Filter />
        </div>
        <Table tableId={tableId} />
        <div className="dataTable_footer mt-3 mb-2 d-flex justify-content-between">
          <Info />
          <Paginate tableId={tableId} />
        </div>
      </div>
    </DataTableContextProvider>
  )
}

export default DataTable
