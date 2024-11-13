//Getting props from TodoList

import React, { useState } from 'react';

function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
  const [status, setStatus] = useState(todo.status);

  const handleSave = () => {
    onUpdate(todo.id, { task, status });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            className="input-field"
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <select
            className="input-field"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
            <option value="completed">Completed</option>
          </select>
          <button className="button" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span className="task">{task}</span>
          <span className="status">{status}</span>
          <button className="button" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="button" onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
