import type { ChangeEvent } from "react"
import { useDataTableContext } from "~/lib/contexts/dataTableContext"
import { setFilter } from "~/lib/reducer/action-creators"

function Filter() {
  const { state, dispatch } = useDataTableContext()
  const { filter } = state

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value))
  }

  console.info("filter rendered")

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
