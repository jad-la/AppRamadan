import React, { useState } from 'react'
    import TaskWidget from '../components/TaskWidget'
    import TaskForm from '../components/TaskForm'
    import './Tasks.css'

    const Tasks = () => {
      const [tasks, setTasks] = useState([
        { id: 1, title: 'Préparer iftar', dueDate: '2024-03-15', priority: 'high', description: 'Acheter les ingrédients nécessaires', completed: false },
        { id: 2, title: 'Faire les courses', dueDate: '2024-03-16', priority: 'medium', description: 'Lait, œufs, pain', completed: true },
        { id: 3, title: 'Appeler la famille', dueDate: '2024-03-17', priority: 'low', description: 'Prendre des nouvelles', completed: false }
      ])
      const [selectedTask, setSelectedTask] = useState(null)

      const addTask = (task) => {
        const newTask = { ...task, id: Date.now(), completed: false }
        setTasks([...tasks, newTask])
      }

      const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => 
          task.id === updatedTask.id ? updatedTask : task
        ))
        setSelectedTask(null)
      }

      const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
      }

      const toggleTask = (id) => {
        setTasks(tasks.map(task => 
          task.id === id ? { ...task, completed: !task.completed } : task
        ))
      }

      return (
        <div className="tasks-page">
          <h1>Mes tâches</h1>
          
          <div className="tasks-container">
            <TaskWidget 
              tasks={tasks}
              onEditTask={setSelectedTask}
              onDeleteTask={deleteTask}
              onToggleTask={toggleTask}
              showDescription={true}
            />
            <TaskForm 
              selectedTask={selectedTask}
              onAddTask={addTask}
              onUpdateTask={updateTask}
              onCancel={() => setSelectedTask(null)}
            />
          </div>
        </div>
      )
    }

    export default Tasks
