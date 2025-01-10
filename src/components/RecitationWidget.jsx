import React, { useState } from 'react'
    import './RecitationWidget.css'

    const RecitationWidget = () => {
      const [recitations, setRecitations] = useState([
        { id: 1, surah: 'Al-Fatiha', verses: '1-7', completed: false },
        { id: 2, surah: 'Al-Baqarah', verses: '1-5', completed: false },
        { id: 3, surah: 'Al-Ikhlas', verses: '1-4', completed: true }
      ])

      const toggleRecitation = (id) => {
        setRecitations(recitations.map(recitation => 
          recitation.id === id ? { ...recitation, completed: !recitation.completed } : recitation
        ))
      }

      const completeAll = () => {
        setRecitations(recitations.map(recitation => ({
          ...recitation,
          completed: true
        })))
      }

      return (
        <div className="recitation-widget">
          <h2>Récitation du jour</h2>
          
          <div className="recitation-list">
            {recitations.map(recitation => (
              <div
                key={recitation.id}
                className={`recitation-item ${recitation.completed ? 'completed' : ''}`}
                onClick={() => toggleRecitation(recitation.id)}
              >
                <div className="recitation-content">
                  <span className="recitation-surah">{recitation.surah}</span>
                  <span className="recitation-verses">Versets {recitation.verses}</span>
                </div>
                <div className="recitation-check">
                  {recitation.completed ? '✔️' : '○'}
                </div>
              </div>
            ))}
          </div>

          <button className="complete-button" onClick={completeAll}>
            Terminer
          </button>
        </div>
      )
    }

    export default RecitationWidget
