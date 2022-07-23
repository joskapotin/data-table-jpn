import { v4 as uuidv4 } from "uuid"
import useDataTableContext from "../../../../hooks/useDataTableContext/useDataTableContext"
import type { Entry, Label } from "../../../../models"

type RowProps = {
  entry: Entry
}

function Row({ entry }: RowProps) {
  const { state } = useDataTableContext()
  const { labels, sortBy } = state

  return (
    <tr>
      {labels.map((label: Label) => (
        <td key={`${label.data}-${uuidv4()}`} className={label.data === sortBy ? "current-label" : ""}>
          {entry[label.data]}
        </td>
      ))}
    </tr>
  )
}

export default Row
