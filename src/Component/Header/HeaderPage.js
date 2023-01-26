import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import Login from "../Login/login";
import Register from "../Login/Register";
import { userDetails, logoutUser } from "../../Service/AuthService";
import {ToastContainer} from "react-toastify"

const HeaderPage = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});


    useEffect(() => {

        if (localStorage.getItem("token")) {
            userDetails(localStorage.getItem("token")).then((data) => {
                setUser(data);
                setIsLogin(true);
            });
        }

    }, [isLogin])

    console.log(isLogin);

    const logout = () => {
        logoutUser();
        window.location = "/";
    }

    return (
        <div>
            <nav class="navbar navbar1 navbar-expand-lg">
                <div class="container-fluid">
                    <a class="" href="/"><img className="ms-4 navlogo" alt="" src={logo} /> <br /><span class="ms-1 logotext">BROWNFIELD</span> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class=" navbar-list navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="w-50">
                            </li>

                        </ul>
                            {
                                isLogin ?
                                    <span class="navbar-text">
                                        <a href="/" className="a me-4">About us</a>
                                    </span>
                                    :
                                    <span class="navbar-text">
                                        <a href="/" className="a me-4">About us</a>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn me-2 btn-outline-light">Login</button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#Register" class="btn  me-2 btn-outline-light">Register</button>
                                    </span>
                            }
                    </div>
                </div>

                {
                    isLogin ? 
                    <div class="collapse navbar-collapse" id="navbar-list-4" style={{ paddingRight: "40px" }}>
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="a nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle" /> My Profile
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="/">Dashboard</a>
                                <a class="dropdown-item" href="/UserProfile">Edit Profile</a>
                                <a class="dropdown-item" href="#" onClick={logout}>Log Out</a>
                            </div>
                        </li>
                    </ul>
                </div>
                : 
                ""
                }
                

            </nav>
            <div class="modal" id="exampleModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-body">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal" id="Register" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-body">
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPage;