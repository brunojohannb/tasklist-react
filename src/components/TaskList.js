import React, { useState } from 'react';
import Task from './Task';
import './TaskList.css'

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Função para adicionar nova tarefa
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, isCompleted: false }]);
      setNewTask(''); // Limpa o campo de input
    }
  };

  // Função para marcar tarefa como completa
  const markTaskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
  };

  // Função para remover tarefa
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      <h1>Lista de Tarefas</h1>
      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            markTaskComplete={markTaskComplete}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
