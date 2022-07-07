import { v4 as uuidv4 } from "uuid"
import PageSize from "./components/pageSize/pageSize"
import Filter from "./components/filter/filter"
import Table from "./components/table/table"
import Info from "./components/info/info"
import Paginate from "./components/paginate/paginate"

export default function App() {
  /* The table need an unique id to be identify from the pagination. For accessibility purposes */
  const tableId = uuidv4()

  return (
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
  )
}
