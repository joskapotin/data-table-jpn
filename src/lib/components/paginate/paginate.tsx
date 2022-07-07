import { useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { useDataTableContext } from "../../contexts/dataTableContext"
import { setTotalPages } from "../../reducer/action-creators"
import PageItem from "./pageItem/pageItem"

type PaginateProps = {
  tableId: string
}

export default function Paginate({ tableId }: PaginateProps) {
  const {
    state: { pageSize, totalPages, filterResults },
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
