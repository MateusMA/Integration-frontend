import { Component } from "react";
import login from "../Controller/loginController";
import InputText from "./InputText";
import InputButton from "./InputButton";
import Tittle from "./Tittle";

class LoginScreen extends Component {

    handleSubmit = () => {

        let userName = document.getElementById("userName").value
        let userPassword = document.getElementById("userPassword").value

       login(userName, userPassword)
    }

    handleClick = () => {
        return alert("clicou")
    }

    render() {
        return <div id="content">
            <div id="card">
                <form id="form_login" onSubmit={this.handleSubmit}>
                    <Tittle text="Name" />
                    <InputText txtType="text" placeholder="Enter your username" id = "userName"/>
                    <Tittle text="Password" />
                    <InputText txtType="password" placeholder="Enter your password" id = "userPassword"/>
                    <div id="button_box">
                        <InputButton type = "submit" textValue="Login" id="login_button"/>
                        <button id="cadaster_button" href="/register"><a href="/register">Register</a></button>
                    </div>
                </form>
            </div>
        </div>

    }
}

export default LoginScreen