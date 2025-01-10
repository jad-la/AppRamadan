import React, { useState } from 'react'
    import { FaEdit, FaTrash } from 'react-icons/fa'
    import './TaskWidget.css'

    const TaskWidget = ({ 
      tasks, 
      onEditTask, 
      onDeleteTask, 
      onToggleTask, 
      onAddTask, 
      showAddTask = false,
      showDescription = false
    }) => {
      const [newTask, setNewTask] = useState('')

      const handleAddTask = () => {
        if (newTask.trim() && onAddTask) {
          onAddTask({
            title: newTask,
            dueDate: new Date().toISOString().split('T')[0],
            priority: 'low',
            description: '',
            completed: false
          })
          setNewTask('')
        }
      }

      return (
        <div className="task-widget">
          <h2>Mes tâches</h2>
          
          <div className="task-list">
            {tasks.map(task => (
              <div
                key={task.id}
                className={`task-item ${task.completed ? 'completed' : ''}`}
              >
                {onToggleTask && (
                  <div 
                    className="task-check"
                    onClick={() => onToggleTask(task.id)}
                  >
                    {task.completed ? '✔️' : '○'}
                  </div>
                )}
                <div className="task-priority" data-priority={task.priority}></div>
                <div className="task-content">
                  <div className="task-header">
                    <span className="task-title">{task.title}</span>
                    {onEditTask && onDeleteTask && (
                      <div className="task-actions">
                        <button 
                          className="edit-btn"
                          onClick={() => onEditTask(task)}
                        >
                          <FaEdit />
                        </button>
                        <button 
                          className="delete-btn"
                          onClick={() => onDeleteTask(task.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    )}
                  </div>
                  <span className="task-date">
                    {new Date(task.dueDate).toLocaleDateString('fr-FR', { 
                      weekday: 'short', 
                      day: 'numeric', 
                      month: 'short' 
                    })}
                  </span>
                  {showDescription && task.description && (
                    <p className="task-description">{task.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {showAddTask && (
            <div className="task-add">
              <input
                type="text"
                placeholder="Ajouter une tâche..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
              />
              <button onClick={handleAddTask}>Ajouter</button>
            </div>
          )}
        </div>
      )
    }

    export default TaskWidget
