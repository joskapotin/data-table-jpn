import DataTableContextProvider from "./contexts/DataTableContext"
import { v4 as uuidv4 } from "uuid"
import PageSize from "./components/page-size/page-size"
import Filter from "./components/filter/filter"
import Table from "./components/table/table"
import Info from "./components/info/info"
import Paginate from "./components/paginate/paginate"
import type { Data } from "./models"
import "./data-table.css"

type DataTableProps = {
  data: Data
}

function DataTable({ data }: DataTableProps) {
  /* The table need an unique id to be identify from the pagination. For accessibility purposes */
  const tableId = uuidv4()

  return (
    <DataTableContextProvider data={data}>
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
