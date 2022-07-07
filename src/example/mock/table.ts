import mockedEmployees from "./employees"

const table = () => {
  return {
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
}

export default table
