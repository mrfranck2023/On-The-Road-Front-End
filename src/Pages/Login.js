import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from "../Components/Navigation";
const Login = () => {

    function SwitchContent()
    {
        const content = document.getElementById("content");
        const registerBtn = document.getElementById("register");  
        const loginBtn = document.getElementById("login");     
        
        registerBtn.addEventListener("click", () => {
            content.classList.add("active")
        });

        loginBtn.addEventListener("click", () => {
            content.classList.remove("active")
        });        
    }


// ------------------------------------------------------------- register -------------------------------------------------------------------
const [nom, setNom] = useState([])
const [email, setEmail] = useState([])
const [motdepasse, setMotdepasse] = useState([])
const navigate = useNavigate()

function register(event)
{
    event.preventDefault()
    axios.post("http://localhost:3002/register", {nom, email, motdepasse})
    .then(res=>{
        navigate("/home")
        console.log("on y est");
    })
    .catch(err=>console.log(err))
}
// ------------------------------------------------------------- register -------------------------------------------------------------------
    return (
        <div className="content justify-content-center align-items-center d-flex shadow-lg" id="content">
            <Navigation />
            <div className="col-md-6 d-flex justify-content-center">
                    <form action="" onSubmit={register}>
                        <div className="header-text mb-4">
                                <h1>Create account</h1>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" placeholder="Nom" className="form-control form-control-lg bg-light fs-6" onChange={e=>setNom(e.target.value)} />
                        </div>

                        <div className="input-group mb-3">
                            <input type="email" placeholder="Email" className="form-control form-control-lg bg-light fs-6" onChange={e=>setEmail(e.target.value)} />
                        </div>

                        <div className="input-group mb-3" >
                            <input type="password" placeholder="Mot de passe " className="form-control form-control-lg bg-light fs-6" onChange={e=>setMotdepasse(e.target.value)}/>
                        </div>

                        <div className="input-group mb-3 justify-centent-center">
                            <button className="btn border-white text-white w-50 fs-6">Register</button>
                        </div>

                    </form>
            </div>

            <div className="col-md-6 right-box">
                    <form action="">
                        <div className="header-text mb-4">
                                <h1>Login</h1>
                        </div>

                        <div className="input-group mb-3">
                            <input type="email" placeholder="Email" className="form-control form-control-lg bg-light fs-6" />
                        </div>

                        <div className="input-group mb-3" >
                            <input type="password" placeholder="Mot de passe " className="form-control form-control-lg bg-light fs-6" />
                        </div>

                        <div className="input-group mb-5 d-flex justify-content-between">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="" id="" />
                                <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember me</small></label>
                            </div>
                            <div className="forgot">
                                <small><a href="#">Forgot password?</a></small>
                            </div>
                        </div>
                        
                        <div className="input-group mb-3 justify-centent-center">
                            <button className="btn border-white text-white w-50 fs-6">Login</button>
                        </div>

                    </form>
            </div>



            {/* --------------------------------------------------------Switch panel---------------------------------------------------------------------------- */}

            <div className="switch-content">
                <div className="switch">
                    <div className="switch-panel switch-left">
                        <h1>Hello again</h1>
                        <p>We are happy to see you back</p>
                        <button className="hidden btn border-white text-white w-50 fs-6" id="login" onClick={SwitchContent}>Login</button>
                    </div>

                    <div className="switch-panel switch-right">
                        <h1>Welcome</h1>
                        <p>Join our plateform to explore a New Experience</p>
                        <button className="hidden btn border-white text-white w-50 fs-6" id="register" onClick={SwitchContent}>Register</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;