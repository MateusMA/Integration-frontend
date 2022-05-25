import { Component } from "react"

class InputButton extends Component {
    render() {
        return <input type={this.props.type} value={this.props.textValue} id={this.props.id}></input>
    }
}

export default InputButton