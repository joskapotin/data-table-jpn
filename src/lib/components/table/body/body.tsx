import { v4 as uuidv4 } from "uuid"
import type { Entries } from "~/lib/models"
import Row from "./row/row"

type BodyProps = {
  entries: Entries
}

function Body({ entries }: BodyProps) {
  return (
    <tbody className="table-group-divider">
      {entries.map(entry => (
        <Row key={`row-${uuidv4()}`} entry={entry} />
      ))}
    </tbody>
  )
}

export default Body
