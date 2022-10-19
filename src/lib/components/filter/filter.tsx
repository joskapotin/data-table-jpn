import type { ChangeEvent } from "react"
import useDataTableContext from "../../hooks/useDataTableContext/useDataTableContext"
import { setFilter } from "../../reducer/action-creators"

function Filter() {
  const { state, dispatch } = useDataTableContext()
  const { filter } = state

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value))
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
        value={filter || ""}
      />
    </label>
  )
}

export default Filter
