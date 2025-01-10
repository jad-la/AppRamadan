import React from 'react'
    import Navbar from './Navbar'
    import DailyActions from './DailyActions'
    import './Sidebar.css'

    const Sidebar = () => {
      return (
        <div className="sidebar">
          <Navbar />
          <DailyActions />
        </div>
      )
    }

    export default Sidebar
