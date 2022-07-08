import { useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import { useDataTableContext } from "~/lib/contexts/dataTableContext"
import { sortEntries } from "~/lib/utilities/helpers"
import Row from "./row/row"
import type { Entry } from "~/lib/models"

function Body() {
  const { state } = useDataTableContext()
  const { currentPage, pageSize, filterResults, sortBy, sortDirection } = state

  const sortedEntries = useMemo(() => sortEntries({ entries: filterResults, sortBy, sortDirection }), [filterResults, sortBy, sortDirection])
  const paginatedEntries = sortedEntries.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  console.info("body rendered")

  return (
    <tbody className="table-group-divider">
      {paginatedEntries.map((entry: Entry) => (
        <Row key={`row-${uuidv4()}`} entry={entry} />
      ))}
    </tbody>
  )
}

export default Body
