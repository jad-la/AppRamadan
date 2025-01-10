import React from 'react'
    import './HadithWidget.css'

    const HadithWidget = () => {
      const hadith = {
        text: "Le Prophète (ﷺ) a dit : 'Le meilleur d'entre vous est celui qui apprend le Coran et l'enseigne.'",
        source: "Bukhari"
      }

      return (
        <div className="hadith-widget">
          <h2>Hadith du jour</h2>
          
          <div className="hadith-content">
            <p>{hadith.text}</p>
            <span className="hadith-source">- {hadith.source}</span>
          </div>
        </div>
      )
    }

    export default HadithWidget
