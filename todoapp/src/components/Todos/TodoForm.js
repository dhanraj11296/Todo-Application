//Used uuid to generate a unique ID, since we add multiple tasks, each must have an ID, "uuid" will create a virtual ID for items
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ onAdd }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    onAdd({ id: uuidv4(), task, status: 'pending' });
    setTask('');
  };

  return (
    <div>
      <input type="text" value={task} onChange={(event) => setTask(event.target.value)} />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TodoForm;
