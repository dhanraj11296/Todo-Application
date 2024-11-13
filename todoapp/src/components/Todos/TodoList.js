//Used localstorage to save the details using useEffect(), in class component we can use componentDidMount()
//Used local storage as having issue with generating jwtToken, I used localStorage to save datas
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import {Link} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import './Todos.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = () => {
    if (newTask.trim()) {
      const newTodo = { id: uuidv4(), task: newTask, status: 'pending' };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setNewTask('');
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
  };

  const updateTodo = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTask } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <>
    <div>
      <button className="button buttonL"><Link to="/profile">Profile</Link></button>
      <button className="button buttonL"><Link to="/logout">Logout</Link></button>
    </div>
    <div className="todos-container">
      <h2>List Of Movies</h2>
      <div className="add-todo">
        <input
          className="input-field"
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button className="button" onClick={addTodo}>Add Task</button>
      </div>
      <div className="todo-items">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default TodoList;
