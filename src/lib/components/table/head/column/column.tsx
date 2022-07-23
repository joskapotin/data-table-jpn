import useDataTableContext from "../../../../hooks/useDataTableContext/useDataTableContext"
import { setSortBy, setSortDirection } from "../../../../reducer/action-creators"
import type { Label } from "../../../../models"

type ColumnProps = {
  label: Label
}

function Column({ label }: ColumnProps) {
  const { state, dispatch } = useDataTableContext()
  const { sortBy, sortDirection } = state

  const handleClick = () => {
    if (sortBy === label.data) {
      switch (sortDirection) {
        case "asc":
          dispatch(setSortDirection("desc"))
          break
        case "desc":
          dispatch(setSortDirection(undefined))
          dispatch(setSortBy(undefined))
          break
        default:
          dispatch(setSortDirection("asc"))
      }
    } else {
      dispatch(setSortBy(label.data))
      dispatch(setSortDirection("asc"))
    }
  }

  const getLabelClassName = () => {
    if (label.data !== sortBy) return "sorting"
    if (sortDirection === "asc") return "sorting sorting_asc"
    if (sortDirection === "desc") return "sorting sorting_desc"
  }

  console.info("column rendered")

  return (
    <th onClick={() => handleClick()} className={getLabelClassName()}>
      {label.title}
    </th>
  )
}

export default Column
