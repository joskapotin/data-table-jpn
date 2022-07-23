import DataTable from "../lib/dataTable"
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
  return <DataTable data={data} />
}

export default Example
