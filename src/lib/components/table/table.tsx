import { useEffect, useMemo } from "react"
import { useDataTableContext } from "~/lib/contexts/dataTableContext"
import { setFilterResults } from "~/lib/reducer/action-creators"
import { sortEntries, filterEntries } from "~/lib/utilities/helpers"
import Head from "./head/head"
import Body from "./body/body"

type TableProps = {
  tableId: string
}

function Table({ tableId }: TableProps) {
  const { state, dispatch } = useDataTableContext()
  const { labels, entries, currentPage, pageSize, filter, sortBy, sortDirection } = state

  const filteredEntries = useMemo(() => filterEntries(entries, filter), [entries, filter])
  const sortedEntries = useMemo(() => sortEntries({ entries: filteredEntries, sortBy, sortDirection }), [filteredEntries, sortBy, sortDirection])
  const paginatedEntries = sortedEntries.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  useEffect(() => {
    dispatch(setFilterResults(filteredEntries.length))
  }, [filteredEntries.length, dispatch])

  return (
    <div className="table-responsive">
      <table className="dataTable table table-striped" id={tableId}>
        <Head labels={labels} />
        <Body entries={paginatedEntries} />
      </table>
    </div>
  )
}

export default Table
