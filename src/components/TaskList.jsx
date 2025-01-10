import React from 'react'
    import { FaEdit, FaTrash } from 'react-icons/fa'
    import './TaskList.css'

    const TaskList = ({ tasks, onSelectTask, onDeleteTask, onToggleTask }) => {
      return (
        <div className="task-list">
          <h2>Mes tâches</h2>
          
          <div className="tasks">
            {tasks.map(task => (
              <div
                key={task.id}
                className={`task-item ${task.completed ? 'completed' : ''}`}
              >
                <div className="task-priority" data-priority={task.priority}></div>
                <div className="task-content">
                  <div className="task-header">
                    <span className="task-title">{task.title}</span>
                    <div className="task-actions">
                      <button 
                        className="edit-btn"
                        onClick={() => onSelectTask(task)}
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
                  </div>
                  <span className="task-date">
                    {new Date(task.dueDate).toLocaleDateString('fr-FR', { 
                      weekday: 'short', 
                      day: 'numeric', 
                      month: 'short' 
                    })}
                  </span>
                </div>
                <div 
                  className="task-check"
                  onClick={() => onToggleTask(task.id)}
                >
                  {task.completed ? '✔️' : '○'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    export default TaskList
