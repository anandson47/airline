import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Login/login.css";
import md5 from "md5";
import { getDetailsByPnr } from "../../Service/AuthService";

const CheckInForm = () => {

    const [pnr , setPnr] = useState("");
    const [session , setSession] = useState("");
    const [email, setEmail] = useState("");
    
    const onEmailHandler = (e) => {
        setEmail(e.target.value)  
    }
    const onPnrHandler = (e) => {
        setPnr(e.target.value)
    }

    const onSubmitHandler=(e)=>{
        getDetailsByPnr(pnr).then( (data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
        alert("check In")
    }

    return (
        <div class="box-form">
            <div class="left">
                <div class="overlay">
                    <h1>Brown Field Airlines</h1>
                </div>
            </div>
            <div class="right">
                <h5 class="">Check In</h5>
                <div class="inputs pt3">
                    <input type="text" placeholder="PNR Number" onChange={onPnrHandler}/>
                    <br/>
                    <input type="password" placeholder="Email Address" onChange={onEmailHandler}/>
                </div>
                <br/><br/>
                <div class="Login_signup ">
                    <button onClick={onSubmitHandler}>Check In</button>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default CheckInForm;