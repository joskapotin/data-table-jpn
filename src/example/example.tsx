import App from "../lib/index"
import useAsync from "./hooks/useAsync"
import { getEmployees } from "./services/api"

function Example() {
  const { loading, error, value } = useAsync(getEmployees)

  return (
    <>
      {loading && <div>Loading...</div>}
      {value && <App table={value} />}
      {error && <div>{error}</div>}
    </>
  )
}

export default Example
