import React, { useEffect, useState } from "react";
import "./login.css";
import image from "./meeshologo-2.png";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <NavLink to="/">
        <img className="loginLogo" src={image} />
      </NavLink>

      <div className="loginContainer">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="loginSigninButton">
            Sign In
          </button>
              </form>
              <div className="css-div">
                  <hr className="css-hr"/>
                    <p className="css-p"> New to messho?</p>
                  <hr className="css-hr"/>
       
        
              </div>
            
        <button onClick={register} className="loinRegisterButton">
          Create your Account
        </button>
      </div>
    </div>
  );
}
export default Login;
