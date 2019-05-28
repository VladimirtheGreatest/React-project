import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
    <h1>Vladimir</h1>
    <p>This is a functional component practice</p>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Navigation</li>
    </ul>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
)
