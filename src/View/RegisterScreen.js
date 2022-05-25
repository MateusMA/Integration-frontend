import { Component } from "react";
import InputText from "./InputText";
import InputButton from "./InputButton";
import cadaster from "../Controller/cadasterController"

class RegisterScreen extends Component {

    handleSubmit = () => {

        let registerName = document.getElementById("registerName").value
        let registerPass = document.getElementById("registerPass").value
        let confUserPassword = document.getElementById("confRegisterPass").value

        if(registerPass === confUserPassword){
            cadaster(registerName, registerPass)
        }else{
            alert("Password error, try again.")
        }
       

    }

    render() {
        return <div id = "contentRegister">
            <form id="formRegister" onSubmit={this.handleSubmit}>
                <h1 className="tittleScreen">Welcome to the registration screen.</h1>
            <h2 className="txtRegister">Username:</h2>
            <InputText txtType="text" id="registerName" placeholder="Enter your username"></InputText>
            <h2 className = "txtRegister">Password:</h2>
            <InputText txtType="password" id="registerPass" placeholder="Enter your password"></InputText>
            <h2 className = "txtRegister">Confirm:</h2>
            <InputText txtType="password" id="confRegisterPass" placeholder="Confirm password"></InputText>
                <InputButton type="submit" textValue="Register" id="registerButton"></InputButton>
            </form>
        </div>
    }
}

export default RegisterScreen;