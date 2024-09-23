import React, { useState } from 'react';
import Task from './Task';
import Styles from './TaskList.module.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, isCompleted: false }]);
      setNewTask(''); 
    }
  };

  
  const markTaskComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
 
  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className={Styles.task_list}>
      <h1 className={Styles.tftitle}>Lista de Tarefas</h1>
      <div className={Styles.input_section}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Digite uma tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
      <div className={Styles.tasks}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            markTaskComplete={markTaskComplete}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
