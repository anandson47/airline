import React from "react";
import { useState } from "react";
import setTimeout from "react";
import axios from "axios";
import "./login.css";
import md5 from "md5";
import { authService } from "../../Service/AuthService";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify"
const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [session, setSession] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitHandler = async () => {
        const user = {
            username: email,
            password: password
        }
        console.log(user)
        await authService(user);
        setTimeout(() => window.location = "/", 10000)


    }

    return (
        <div>
            <div class="box-form">
                <div class="left">
                    <div class="overlay">
                        <h1>Brown Field Airlines</h1>
                    </div>
                </div>
                <div class="right">
                    <h5>Login</h5>
                    <div class="inputs">
                        <input type="text" placeholder="Email" onChange={onEmailHandler} />
                        <br />
                        <input type="password" placeholder="password" onChange={onPasswordHandler} />
                    </div>
                    <br /><br />
                    <div class="Login_signup">
                        <button onClick={onSubmitHandler}>Login</button>
                        <br />
                        <p>Don't have an account? <a data-dismiss="modal" data-bs-toggle="modal" data-toggle="modal" data-bs-target="#Register">Create Your Account</a> it takes less than a minute</p>
                    </div>
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
            />
        </div>

    )
}

export default Login;