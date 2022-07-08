import { v4 as uuidv4 } from "uuid"
import Column from "./column/column"
import type { Labels, Label } from "~/lib/models"

type HeadProps = {
  labels: Labels
}

function Head({ labels }: HeadProps) {
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
