import { useSearchParams } from "react-router-dom"
import type { Label } from "../../../../models"

type ColumnProps = {
  label: Label
}

function Column({ label }: ColumnProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const sortBy = searchParams.get("sortBy")
  const sortDirection = searchParams.get("sortDirection")

  const handleClick = () => {
    searchParams.set("sortBy", label.data)
    switch (sortDirection) {
      case "asc":
        searchParams.set("sortDirection", "desc")
        setSearchParams(searchParams)
        break
      case "desc":
        searchParams.delete("sortBy")
        searchParams.delete("sortDirection")
        setSearchParams(searchParams)
        break
      default:
        searchParams.set("sortDirection", "asc")
        setSearchParams(searchParams)
    }
  }

  const getLabelClassName = () => {
    if (label.data === sortBy) {
      if (sortDirection === "asc") return "sorting sorting_asc"
      return "sorting sorting_desc"
    }
    return "sorting"
  }

  return (
    <th onClick={() => handleClick()} className={getLabelClassName()}>
      {label.title}
    </th>
  )
}

export default Column
