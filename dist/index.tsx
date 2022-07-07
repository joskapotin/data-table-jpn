import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./app"
import DataTableContextProvider from "./contexts/dataTableContext"
import "./index.css"
import type { Table } from "./types"

type DataTableProps = {
  table: Table
}

export default function DataTable({ table }: DataTableProps) {
  return (
    <BrowserRouter>
      <DataTableContextProvider table={table}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </DataTableContextProvider>
    </BrowserRouter>
  )
}
