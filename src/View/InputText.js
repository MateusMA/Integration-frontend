import { Component } from "react"

class InputText extends Component {
    render() {
        return <input type={this.props.txtType} id = {this.props.id} 
        placeholder={this.props.placeholder} className = "text_box" required></input>
    }
}

export default InputText