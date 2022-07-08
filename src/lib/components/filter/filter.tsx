import type { ChangeEvent } from "react"
import { useSearchParams } from "react-router-dom"

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get("filter") ?? ""

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      searchParams.set("filter", e.target.value)
      searchParams.set("currentPage", "1")
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

export default Filter
