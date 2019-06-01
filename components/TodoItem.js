import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.x.text}</p>    //hardcoded html element will display paragraph with the text from the array 
        </div>
    )
}

export default TodoItem
