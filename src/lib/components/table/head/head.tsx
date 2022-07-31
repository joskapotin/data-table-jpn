import { v4 as uuidv4 } from "uuid"
import useDataTableContext from "../../../hooks/useDataTableContext/useDataTableContext"
import Column from "./column/column"
import type { Label } from "../../../models"

function Head() {
  const { state } = useDataTableContext()
  const { labels } = state

  return (
    <thead>
      <tr>
        {labels.map((label: Label) => (
          <Column key={`label-${uuidv4()}`} label={label} />
        ))}
      </tr>
    </thead>
  )
}

export default Head
