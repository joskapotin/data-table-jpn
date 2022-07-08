import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import options from "~/lib/constants/options"
import { useDataTableContext } from "~/lib/contexts/DataTableContext"
import { setTotalPages } from "~/lib/reducer/action-creators"
import PageItem from "./page-item/page-item"

type PaginateProps = {
  tableId: string
}

function Paginate({ tableId }: PaginateProps) {
  const {
    state: { totalPages, filterResults },
    dispatch,
  } = useDataTableContext()
  const [searchParams] = useSearchParams()

  const pageSize = parseInt(searchParams.get("pageSize") ?? options.pageSizeOptions[0].toString(), 10)

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(filterResults / pageSize)))
  }, [filterResults, pageSize, dispatch])

  const PageElements = () => {
    const pageElements = []

    for (let i = 0; i <= totalPages + 1; i += 1) {
      let text = i.toString()

      if (i === 0) {
        text = "Previous"
      }

      if (i === totalPages + 1) {
        text = "Next"
      }

      pageElements.push(<PageItem tableId={tableId} key={`page-${uuidv4()}`} pageIndex={i} text={text} />)
    }
    return pageElements
  }

  return (
    <nav aria-label="data-table page navigation">
      <ul className="pagination">{PageElements()}</ul>
    </nav>
  )
}

export default Paginate
