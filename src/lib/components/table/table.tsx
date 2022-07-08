import { useEffect, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import options from "~/lib/constants/options"
import { useDataTableContext } from "~/lib/contexts/DataTableContext"
import { setFilterResults } from "~/lib/reducer/action-creators"
import { sortEntries, filterEntries } from "~/lib/utilities/helpers"
import Head from "./head/head"
import Body from "./body/body"

type TableProps = {
  tableId: string
}

function Table({ tableId }: TableProps) {
  const { state, dispatch } = useDataTableContext()
  const [searchParams] = useSearchParams()

  const { labels, entries } = state

  const sortBy = searchParams.get("sortBy")
  const sortDirection = searchParams.get("sortDirection")
  const filter = searchParams.get("filter") ?? ""
  const currentPage = parseInt(searchParams.get("currentPage") ?? "1", 10)
  const pageSize = parseInt(searchParams.get("pageSize") ?? options.pageSizeOptions[0].toString(), 10)

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
