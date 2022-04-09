import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form >
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Type Your Email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Type Your Password"
            />
          </div>
          <input type="submit" className="form-submit" value="Login" />
        </form>
        <p>New to Ema-Jhon? <Link className="form-link" to='/signup'>Create an Account</Link></p>
        <div className="or-section">
            <div className="line"></div>
            <div className="">Or</div>
            <div className="line"></div>
        </div>
        <button><FontAwesomeIcon icon={['fab', 'google']}/></button>
      </div>
    </div>
  );
};

export default Login;
