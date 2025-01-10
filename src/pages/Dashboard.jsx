import React, { useState } from 'react'
    import TaskWidget from '../components/TaskWidget'
    import ProgressWidget from '../components/ProgressWidget'
    import RecitationWidget from '../components/RecitationWidget'
    import HadithWidget from '../components/HadithWidget'
    import './Dashboard.css'

    const Dashboard = () => {
      const [tasks, setTasks] = useState([
        { id: 1, title: 'Préparer iftar', dueDate: '2024-03-15', priority: 'high', completed: false },
        { id: 2, title: 'Faire les courses', dueDate: '2024-03-16', priority: 'medium', completed: true },
        { id: 3, title: 'Appeler la famille', dueDate: '2024-03-17', priority: 'low', completed: false }
      ])

      const toggleTask = (id) => {
        setTasks(tasks.map(task => 
          task.id === id ? { ...task, completed: !task.completed } : task
        ))
      }

      const addTask = (task) => {
        const newTask = { ...task, id: Date.now(), completed: false }
        setTasks([...tasks, newTask])
      }

      return (
        <div className="dashboard">
          <h1>Tableau de bord Ramadan</h1>
          
          <div className="dashboard-grid">
            <TaskWidget 
              tasks={tasks} 
              onToggleTask={toggleTask}
              onAddTask={addTask}
              showAddTask={true}
            />
            <ProgressWidget tasks={tasks} />
            <RecitationWidget />
            <HadithWidget />
          </div>
        </div>
      )
    }

    export default Dashboard
