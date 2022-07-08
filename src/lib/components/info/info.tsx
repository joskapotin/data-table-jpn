import { useSearchParams } from "react-router-dom"
import options from "~/lib/constants/options"
import { useDataTableContext } from "~/lib/contexts/DataTableContext"

function Info() {
  const {
    state: { entries, totalPages, filterResults },
  } = useDataTableContext()
  const [searchParams] = useSearchParams()

  const currentPage = parseInt(searchParams.get("currentPage") ?? "1", 10)
  const pageSize = parseInt(searchParams.get("pageSize") ?? options.pageSizeOptions[0].toString(), 10)
  const totalEntries = entries.length
  const totalRow = filterResults
  const firstRow = totalRow > 0 ? (currentPage - 1) * pageSize + 1 : 0
  const lastRow = pageSize > totalRow || currentPage === totalPages ? totalRow : currentPage * pageSize
  const isFilter = totalRow !== totalEntries

  return (
    <p className="dataTable_info" role="status" aria-live="polite">
      Showing {firstRow} to {lastRow} of {totalRow} entries {isFilter && <span>(filtered from {totalEntries} total entries)</span>}
    </p>
  )
}

export default Info
