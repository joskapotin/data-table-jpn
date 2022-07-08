import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DataTable from "~/lib/data-table"
import mockedEmployees from "./mock/employees"

const data = {
  labels: [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ],
  entries: mockedEmployees,
}

function Example() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataTable data={data} />} />
      </Routes>
    </Router>
  )
}

export default Example
