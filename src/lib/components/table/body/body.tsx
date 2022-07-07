import { useEffect, useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import { useDataTableContext } from "../../../contexts/dataTableContext"
import { setFilterResults } from "../../../reducer/action-creators"
import { sortEntries, filterEntries } from "../../../utilities/helpers"
import Row from "./row/row"

export default function Body() {
  const {
    state: { entries, pageSize },
    dispatch,
    searchParams,
  } = useDataTableContext()
  const sortBy = searchParams.get("sortBy")
  const sortDirection = searchParams.get("sortDirection")
  const filter = searchParams.get("filter") ?? ""
  const currentPage = parseInt(searchParams.get("currentPage") ?? "1", 10)

  const filteredEntries = useMemo(() => filterEntries(entries, filter), [entries, filter])
  const sortedEntries = useMemo(() => sortEntries({ entries: filteredEntries, sortBy, sortDirection }), [filteredEntries, sortBy, sortDirection])
  const paginatedEntries = sortedEntries.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  useEffect(() => {
    dispatch(setFilterResults(filteredEntries.length))
  }, [filteredEntries.length, dispatch])

  return (
    <tbody className="table-group-divider">
      {paginatedEntries.map(entry => (
        <Row key={`row-${uuidv4()}`} entry={entry} />
      ))}
    </tbody>
  )
}
