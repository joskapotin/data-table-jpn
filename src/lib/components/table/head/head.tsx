import { v4 as uuidv4 } from "uuid"
import { useDataTableContext } from "~/lib/contexts/dataTableContext"
import Column from "./column/column"
import type { Label } from "~/lib/models"

function Head() {
  const { state } = useDataTableContext()
  const { labels } = state

  console.info("head rendered")

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
