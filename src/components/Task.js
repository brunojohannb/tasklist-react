import React from 'react';
import styles from './Task.module.css'; 

function Task({ task, markTaskComplete, removeTask }) {
  return (
    <div className={`${styles.task} ${task.isCompleted ? styles.completed : ''}`}>
      <span>{task.text}</span>
      <button className={styles.btncomplete} onClick={() => markTaskComplete(task.id)}>
        Completar
      </button>
      <button className={styles.btnremove} onClick={() => removeTask(task.id)}>
        Remover
      </button>
    </div>
  );
}

export default Task;
