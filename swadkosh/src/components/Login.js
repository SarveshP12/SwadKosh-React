import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2 style={{textAlign:'center'}}><b>LOGIN</b></h2>
        <label>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="button-container">
          <button type="submit">Log In</button>
        </div>
        <div className="link-container">
          <Link to={'/Signin'}>Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
