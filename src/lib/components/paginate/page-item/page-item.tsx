import { useSearchParams } from "react-router-dom"
import { useDataTableContext } from "~/lib/contexts/DataTableContext"

type PageItemProps = {
  tableId: string
  pageIndex: number
  text: string
}

function PageItem({ tableId, pageIndex, text }: PageItemProps) {
  const {
    state: { totalPages },
  } = useDataTableContext()
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = parseInt(searchParams.get("currentPage") ?? "1", 10)
  const disabled = (currentPage === 1 && pageIndex === 0) || (currentPage === totalPages && pageIndex === totalPages + 1) || totalPages < 2
  const active = currentPage === pageIndex

  const getNewPageIndex = () => {
    switch (pageIndex) {
      case 0:
        return currentPage - 1
      case totalPages + 1:
        return currentPage + 1
      default:
        return pageIndex
    }
  }

  const handleClick = () => {
    const newPageIndex = getNewPageIndex()
    searchParams.set("currentPage", newPageIndex.toString())
    setSearchParams(searchParams)
  }

  return (
    <li className="page-item">
      <button
        type="button"
        className={`page-link ${active && "active"} ${disabled && "disabled"}`}
        aria-controls={tableId}
        onClick={() => handleClick()}
        disabled={disabled}
      >
        {text}
      </button>
    </li>
  )
}

export default PageItem
