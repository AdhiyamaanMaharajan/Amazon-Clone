import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i0.wp.com/www.fontshut.com/wp-content/uploads/2023/02/Amazon-Logo-Font-1-scaled-1.jpg?fit=2560%2C1578&ssl=1"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email"></input>
          <h5>Password</h5>
          <input type="password"></input>
          <button type="submit" className="login__signInButton">Sign in</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button className="login__registerButton">Create your Amazon Account</button>
      </div>
      
      
    </div>
  );
}

export default Login;
