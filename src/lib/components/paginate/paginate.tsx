import { useCallback } from "react"
import { v4 as uuidv4 } from "uuid"
import useDataTableContext from "../../hooks/useDataTableContext/useDataTableContext"
import PageItem from "./page-item/page-item"

type PaginateProps = {
  tableId: string
}

function Paginate({ tableId }: PaginateProps) {
  const { state } = useDataTableContext()
  const { totalPages } = state

  const PageElements = useCallback(() => {
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
  }, [totalPages, tableId])

  console.info("paginate rendered")

  return (
    <nav aria-label="data-table page navigation">
      <ul className="pagination">{PageElements()}</ul>
    </nav>
  )
}

export default Paginate
