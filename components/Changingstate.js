import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {                   //initial hardcoded state
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }
    
    //state methods
    handleClick() {
        this.setState(prevState => {         //state will be increased by 1 after button event
            return {
                count: prevState.count + 1
            }
        })
    }
    
      handleClick2() {
        this.setState(prevState => {             //state will be decreased by 1 after button event
            return {
                count: prevState.count - 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Add</button>          //event button
                <button  onClick={this.handleClick2}>Subtract</button>
            </div>
        )
    }
}

export default App
