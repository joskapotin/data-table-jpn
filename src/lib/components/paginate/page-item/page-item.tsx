import useDataTableContext from "../../../hooks/useDataTableContext/useDataTableContext"
import { setCurrentPage } from "../../../reducer/action-creators"

type PageItemProps = {
  tableId: string
  pageIndex: number
  text: string
}

function PageItem({ tableId, pageIndex, text }: PageItemProps) {
  const { state, dispatch } = useDataTableContext()
  const { currentPage, totalPages } = state

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
    dispatch(setCurrentPage(newPageIndex))
  }

  console.info("page-item rendered")

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
