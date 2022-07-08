import { useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { useDataTableContext } from "~/lib/contexts/dataTableContext"
import { setTotalPages } from "~/lib/reducer/action-creators"
import PageItem from "./page-item/page-item"

type PaginateProps = {
  tableId: string
}

function Paginate({ tableId }: PaginateProps) {
  const {
    state: { totalPages, pageSize, filterResults },
    dispatch,
  } = useDataTableContext()

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
