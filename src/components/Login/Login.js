import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const location = useLocation()
  const from = location?.state?.from?.pathname || '/shop';
  const navigate = useNavigate();

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  if(user){
    navigate(from, {replace:true});
  }
  const handleUserSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              placeholder="Type Your Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              placeholder="Type Your Password"
              required
            />
          </div>
          <input type="submit" className="form-submit" value="Login" />
        </form>
        <p style={{color: 'red'}}>{error?.message}</p>
        {
          loading && <p>Loading ..... </p>
        }
        <p>New to Ema-Jhon? <Link className="form-link" to='/signup'>Create an Account</Link></p>
        <div className="or-section">
            <div className="line"></div>
            <div className="">Or</div>
            <div className="line"></div>
        </div>
        <button className="login-with-google"><FontAwesomeIcon icon={['fab', 'google']}/>Login with Google</button>
      </div>
    </div>
  );
};

export default Login;
