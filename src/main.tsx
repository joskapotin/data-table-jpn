import React from "react"
import ReactDOM from "react-dom/client"
import Example from "./example/example"

const rootDiv = document.getElementById("root")
if (rootDiv) {
  const root = ReactDOM.createRoot(rootDiv)
  root.render(
    <React.StrictMode>
      <Example />
    </React.StrictMode>
  )
}
