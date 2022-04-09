import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
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
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Type Your Password"
            />
          </div>
          <input type="submit" className="form-submit" value="Login" />
        </form>
        <p>Already Have an Account? <Link className="form-link" to='/login'>Login</Link></p>
      </div>
    </div>
    );
};

export default Signup;