import useDataTableContext from "../../hooks/useDataTableContext/useDataTableContext"

function Info() {
  const {
    state: { entries, currentPage, totalPages, pageSize, filterResults },
  } = useDataTableContext()

  const totalEntries = entries.length
  const firstRow = filterResults > 0 ? (currentPage - 1) * pageSize + 1 : 0
  const lastRow = pageSize > filterResults || currentPage === totalPages ? filterResults : currentPage * pageSize
  const isFilter = filterResults !== totalEntries

  return (
    <p className="dataTable_info" role="status" aria-live="polite">
      Showing {firstRow} to {lastRow} of {filterResults} entries {isFilter && <span>(filtered from {totalEntries} total entries)</span>}
    </p>
  )
}

export default Info
