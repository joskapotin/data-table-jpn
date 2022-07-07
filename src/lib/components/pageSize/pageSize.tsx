import type { ChangeEvent } from "react"

import { useDataTableContext } from "../../contexts/dataTableContext"
import { setPageSize } from "../../reducer/action-creators"

export default function PageSize() {
  const {
    state: { pageSize },
    dispatch,
  } = useDataTableContext()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPageSize(Number(e.target.value)))
  }

  const pageSizeOptions = [10, 25, 50, 100]

  return (
    <label htmlFor="page-size">
      show{" "}
      <select className="form-select d-inline-block w-auto" aria-label="show entries" name="page-size" onChange={handleChange} value={pageSize}>
        {pageSizeOptions.map((option: number) => (
          <option key={`option-${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>{" "}
      entries
    </label>
  )
}
