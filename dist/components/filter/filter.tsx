import type { ChangeEvent } from "react"
import { useDataTableContext } from "../../contexts/dataTableContext"

export default function Filter() {
  const { searchParams, setSearchParams } = useDataTableContext()
  const filter = searchParams.get("filter") ?? ""

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      searchParams.set("filter", e.target.value)
      setSearchParams(searchParams)
    } else {
      searchParams.delete("filter")
      setSearchParams(searchParams)
    }
  }

  return (
    <label htmlFor="search" id="dataTable-search">
      Search:{" "}
      <input
        name="search"
        className="form-control d-inline-block w-auto"
        aria-label="search"
        aria-describedby="dataTable-search"
        type="search"
        onChange={handleChange}
        value={filter}
      />
    </label>
  )
}
