import React, { useState, useEffect } from 'react'
    import './TaskForm.css'

    const TaskForm = ({ selectedTask, onAddTask, onUpdateTask, onCancel }) => {
      const [title, setTitle] = useState('')
      const [dueDate, setDueDate] = useState('')
      const [priority, setPriority] = useState('low')
      const [description, setDescription] = useState('')

      useEffect(() => {
        if (selectedTask) {
          setTitle(selectedTask.title)
          setDueDate(selectedTask.dueDate)
          setPriority(selectedTask.priority)
          setDescription(selectedTask.description)
        } else {
          resetForm()
        }
      }, [selectedTask])

      const resetForm = () => {
        setTitle('')
        setDueDate('')
        setPriority('low')
        setDescription('')
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        const task = { title, dueDate, priority, description }
        if (selectedTask) {
          onUpdateTask({ ...task, id: selectedTask.id })
        } else {
          onAddTask(task)
        }
        resetForm()
      }

      return (
        <div className="task-form">
          <h2>{selectedTask ? 'Modifier une tâche' : 'Ajouter une nouvelle tâche'}</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Titre</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Date d'échéance</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Priorité</label>
              <div className="priority-options">
                <button
                  type="button"
                  className={`priority-btn ${priority === 'high' ? 'active' : ''}`}
                  onClick={() => setPriority('high')}
                >
                  Urgent
                </button>
                <button
                  type="button"
                  className={`priority-btn ${priority === 'medium' ? 'active' : ''}`}
                  onClick={() => setPriority('medium')}
                >
                  Important
                </button>
                <button
                  type="button"
                  className={`priority-btn ${priority === 'low' ? 'active' : ''}`}
                  onClick={() => setPriority('low')}
                >
                  Modéré
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>Description (optionnel)</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-actions">
              {selectedTask && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={onCancel}
                >
                  Annuler
                </button>
              )}
              <button
                type="submit"
                className="submit-btn"
                disabled={!title || !dueDate}
              >
                {selectedTask ? 'Modifier' : 'Ajouter'}
              </button>
            </div>
          </form>
        </div>
      )
    }

    export default TaskForm
