import type { ChangeEvent } from "react"
import { useDataTableContext } from "~/lib/contexts/dataTableContext"
import { setPageSize } from "~/lib/reducer/action-creators"
import options from "~/lib/constants/options"

function PageSize() {
  const { state, dispatch } = useDataTableContext()
  const { pageSize } = state

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPageSize(parseInt(e.target.value, 10)))
  }

  console.info("pageSize rendered")

  return (
    <label htmlFor="page-size">
      show{" "}
      <select className="form-select d-inline-block w-auto" aria-label="show entries" name="page-size" onChange={handleChange} value={pageSize}>
        {options.pageSizeOptions.map((option: number) => (
          <option key={`option-${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>{" "}
      entries
    </label>
  )
}

export default PageSize
