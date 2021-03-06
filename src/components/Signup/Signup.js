import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
  const navigate = useNavigate();

  const handleEmailBlur =event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordBlur = event => {
    setConfirmPassword(event.target.value);
  }
  
  if(user){
    navigate('/shop')
  }

  const handleCreateUser = event => {
    event.preventDefault();
    if(password !== confirmPassword){
      setError('You should match your password');
      return;
    }
    if(password.length <6){
      setError('Password must be 6 character or longer!');
      return;
    }
    createUserWithEmailAndPassword(email, password);

    
  }

    return (
        <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
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
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="password"
              id=""
              placeholder="Type again Your Password"
              required
            />
          </div>
          <input type="submit" className="form-submit" value="Sign Up" />
        </form>
        <p style={{color: 'red'}}>{error}</p>
        <p>Already Have an Account? <Link className="form-link" to='/login'>Login</Link></p>
      </div>
    </div>
    );
};

export default Signup;