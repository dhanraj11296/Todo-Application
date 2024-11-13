//I faced issues and errors in fetching details from backend to run my todo application details and I am unable to generate JWT tokens

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile/Profile';
import TodoList from './components/Todos/TodoList';
import NotFound from './components/NotFound';
import Logout from './components/Logout';

//I have used Functional method here, for class component method we can use {BrowserRouter, Switch instead of Routes}

//I arranged <TodoList/> component to display initially, since I am unable to fetch details from backend, I used a dummy URL, which might not have user credentials. So the app wont respond to any user credential to log or sign. However we can switch to different path as JWT tokens wasn't generated login: "http://localhost:3000/login" signup: "http://localhost:3000/signup"

// "http://localhost:3000/" as the main motive of the project was to ensure todo operation, I just created a todo page, where we can add our task, once added it can be edited on terms of name or available statuses like "done," "pending," "in progress," and "completed."

//However I have acheived the implementation of Signup and Login page, which can be changed in website using paths "http://localhost:3000/login" and "http://localhost:3000/signup"


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Todo Application</h1>
        <hr/>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
