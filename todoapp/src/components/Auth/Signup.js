import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './Auth.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://apis.ccbp.in/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Signup successful. Please login.');
      } else {
        alert('Signup failed.');
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button className="button" type="submit">Signup</button>
      <p>Already have an Account</p>
      <button className="button" type="submit"><Link to="/login">Login</Link></button>
    </form>
  );
}

export default Signup;
