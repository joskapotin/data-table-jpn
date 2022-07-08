import { useDataTableContext } from "~/lib/contexts/dataTableContext"
import { setSortBy, setSortDirection } from "~/lib/reducer/action-creators"
import type { Label } from "~/lib/models"

type ColumnProps = {
  label: Label
}

function Column({ label }: ColumnProps) {
  const { state, dispatch } = useDataTableContext()
  const { sortBy, sortDirection } = state

  const handleClick = () => {
    dispatch(setSortBy(label.data))
    switch (sortDirection) {
      case "asc":
        dispatch(setSortDirection("desc"))
        break
      case "desc":
        dispatch(setSortBy(""))
        dispatch(setSortDirection("none"))
        break
      default:
        dispatch(setSortDirection("asc"))
    }
  }

  const getLabelClassName = () => {
    if (label.data === sortBy) {
      if (sortDirection === "asc") return "sorting sorting_asc"
      return "sorting sorting_desc"
    }
    return "sorting"
  }

  console.info("column rendered")

  return (
    <th onClick={() => handleClick()} className={getLabelClassName()}>
      {label.title}
    </th>
  )
}

export default Column
