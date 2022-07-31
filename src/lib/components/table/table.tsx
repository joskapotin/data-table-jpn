import Head from "./head/head"
import Body from "./body/body"

type TableProps = {
  tableId: string
}

function Table({ tableId }: TableProps) {
  return (
    <div className="table-responsive">
      <table className="dataTable table table-striped" id={tableId}>
        <Head />
        <Body />
      </table>
    </div>
  )
}

export default Table
