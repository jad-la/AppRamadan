import React, { useState } from 'react'
    import './DailyActions.css'

    const DailyActions = () => {
      const [actions, setActions] = useState([
        { id: 'prayer', label: 'Prière', icon: '🙏', completed: true },
        { id: 'tasbih', label: 'Tasbih', icon: '📿', completed: true },
        { id: 'recitation', label: 'Récitation', icon: '📖', completed: true },
        { id: 'douaa', label: 'Douaa', icon: '🤲', completed: false },
        { id: 'sadaqa', label: 'Sadaqa', icon: '💰', completed: false }
      ])

      const toggleAction = (id) => {
        setActions(actions.map(action => 
          action.id === id ? { ...action, completed: !action.completed } : action
        ))
      }

      const progress = Math.round(
        (actions.filter(action => action.completed).length / actions.length) * 100
      )

      return (
        <div className="daily-actions">
          <h2>Dîne au quotidien</h2>
          
          <div className="actions-list">
            {actions.map(action => (
              <div
                key={action.id}
                className={`action-item ${action.completed ? 'completed' : ''}`}
                onClick={() => toggleAction(action.id)}
              >
                <span className="action-icon">{action.icon}</span>
                <span className="action-label">{action.label}</span>
                <span className="action-check">
                  {action.completed ? '✔️' : '○'}
                </span>
              </div>
            ))}
          </div>

          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="progress-text">{progress}% complété</span>
          </div>
        </div>
      )
    }

    export default DailyActions
