import { useDataTableContext } from "../../../../contexts/dataTableContext"
import type { Label } from "../../../../types"

type ColumnProps = {
  label: Label
}

export default function Column({ label }: ColumnProps) {
  const { searchParams, setSearchParams } = useDataTableContext()
  const sortBy = searchParams.get("sortBy")
  const sortDirection = searchParams.get("sortDirection")

  const handleClick = () => {
    if (sortBy === label.data) {
      switch (sortDirection) {
        case "asc":
          searchParams.set("sortBy", label.data)
          searchParams.set("sortDirection", "desc")
          setSearchParams(searchParams)
          break
        case "desc":
          searchParams.delete("sortBy")
          searchParams.delete("sortDirection")
          setSearchParams(searchParams)
          break
        default:
          searchParams.set("sortBy", label.data)
          searchParams.set("sortDirection", "asc")
          setSearchParams(searchParams)
      }
    } else {
      searchParams.set("sortBy", label.data)
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
