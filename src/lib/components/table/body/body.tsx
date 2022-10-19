import { useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import useDataTableContext from "../../../hooks/useDataTableContext/useDataTableContext"
import type { Entry } from "../../../models"
import { filterEntries, sortEntries } from "../../../utilities/helpers"
import Row from "./row/row"

function Body() {
  const { state } = useDataTableContext()
  const { currentPage, pageSize, entries, filter, sortBy, sortDirection } = state

  const filtredEntries = useMemo(() => filterEntries({ entries, filter }), [entries, filter])

  const sortedEntries = useMemo(() => sortEntries({ entries: filtredEntries, sortBy, sortDirection }), [filtredEntries, sortBy, sortDirection])

  const paginatedEntries = sortedEntries.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return (
    <tbody className="table-group-divider">
      {paginatedEntries.map((entry: Entry) => (
        <Row key={`row-${uuidv4()}`} entry={entry} />
      ))}
    </tbody>
  )
}

export default Body
