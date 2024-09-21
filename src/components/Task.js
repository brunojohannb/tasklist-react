import React from 'react';
import './Task.css'

function Task({ task, index, markTaskComplete, removeTask }) {
  return (
    <div className={`task ${task.isCompleted ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => markTaskComplete(index)}>Completar</button>
        <button onClick={() => removeTask(index)}>Remover</button>
      </div>
    </div>
  );
}

export default Task;