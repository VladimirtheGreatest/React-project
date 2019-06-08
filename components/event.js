import React from "react"

function handleClick() {
    console.log("I was clicked")
}

function imagehover() {
    console.log("I was hovered")
}

function App() {
    return (
        <div>
            <img onMouseOver={imagehover} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App
