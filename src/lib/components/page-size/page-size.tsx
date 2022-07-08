import type { ChangeEvent } from "react"
import { useSearchParams } from "react-router-dom"
import options from "~/lib/constants/options"

function PageSize() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageSize = parseInt(searchParams.get("pageSize") ?? options.pageSizeOptions[0].toString(), 10)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    searchParams.set("pageSize", e.target.value)
    setSearchParams(searchParams)
  }

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
