//The return statement are same in functional as well as class component. I used functional method here, where I used {useState} to get the get details of the input user entering into the fields and getting them using events.
//For class component the syntax would be class Name extends component{render(){return(<></>)}}
//The biggest advantage of react is it being a controllable input and a single page application 
//Used conditional statement in login page to signup page without changing path, if user doesn't have an account it will move through signup page. However I can use <Link> to change the page
//I fetched POST method here, initially in the login page user must provide their creditials to generate JWT token


import React, { useState } from 'react';
import './Auth.css';

function AuthPage() {

  //Setting initial state values
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleToggle = () => {
    setIsLogin(!isLogin);
    setUsername('');
    setPassword('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = isLogin ? 'https://apis.ccbp.in/login' : 'https://apis.ccbp.in/signup';
    const payload = isLogin ? { username, password } : { username, password };

    try {
    const options={
    method: 'POST',
    headers: { 
    'Content-Type': 'application/json'
   },
    body: JSON.stringify(payload),
  }

      const response = await fetch(url, options);
      const data = await response.json();

      if (data.jwtToken) {
        document.cookie = `jwtToken=${data.jwtToken}; path=/`;
        alert(`${isLogin ? 'Login' : 'Signup'} successful`);
      } else {
        alert(data.error_msg || 'Something went wrong');
      }
    } catch (error) {
      console.error(`${isLogin ? 'Login' : 'Signup'} error:`, error);
    }
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button className="button" type="submit">
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button className="toggle-button" onClick={handleToggle}>
          {isLogin ? 'Signup' : 'Login'}
        </button>
      </p>
    </div>
  );
}

export default AuthPage;
