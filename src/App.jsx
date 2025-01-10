import React from 'react'
    import { Routes, Route } from 'react-router-dom'
    import Dashboard from './pages/Dashboard'
    import Profile from './pages/Profile'
    import Statistics from './pages/Statistics'
    import Tasks from './pages/Tasks'
    import Sidebar from './components/Sidebar'
    import './App.css'

    function App() {
      return (
        <div className="app">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/tasks" element={<Tasks />} />
            </Routes>
          </main>
        </div>
      )
    }

    export default App
