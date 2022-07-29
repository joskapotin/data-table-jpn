import DataTableContextProvider from "./contexts/dataTableContext"
import { v4 as uuidv4 } from "uuid"
import options from "./constants/options"
import PageSize from "./components/page-size/page-size"
import Filter from "./components/filter/filter"
import Table from "./components/table/table"
import Info from "./components/info/info"
import Paginate from "./components/paginate/paginate"
import type { Data, DataTableState } from "./models"
import "./dataTable.css"

type DataTableProps = {
  data: Data
}

function DataTable({ data }: DataTableProps) {
  /* The table need an unique id to be identify from the pagination. For accessibility purposes */
  const tableId = uuidv4()

  /**
   * Create the initial state of the table.
   */
  const { labels, entries, sortBy, sortDirection } = data
  const pageSize = options.pageSizeOptions[0]
  const totalPages = Math.ceil(entries.length / pageSize)
  const filterResults = entries
  const initialState = {
    labels,
    entries,
    currentPage: 1,
    pageSize,
    totalPages,
    filterResults,
    sortBy,
    sortDirection,
  } as DataTableState

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
