import React, {Component} from "react"

// state component using constructor and class instead of functions, state can be then rendered with this.state.objectkey


class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "Vladimir",
            age: 28
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )    
    }
}

export default App
