import { Component } from "react"

class Tittle extends Component {
    render() {
        return <p className="tittle_label"> {this.props.text} </p>
    }
}

export default Tittle