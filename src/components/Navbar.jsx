import React from 'react'
    import { Link, useLocation } from 'react-router-dom'
    import { FaTh, FaUser, FaChartPie, FaCalendarAlt } from 'react-icons/fa'
    import './Navbar.css'

    const Navbar = () => {
      const location = useLocation()

      const menuItems = [
        { path: '/', icon: <FaTh />, label: 'Dashboard' },
        { path: '/profile', icon: <FaUser />, label: 'Profil' },
        { path: '/statistics', icon: <FaChartPie />, label: 'Stats' },
        { path: '/tasks', icon: <FaCalendarAlt />, label: 'Tâches' }
      ]

      return (
        <nav className="navbar">
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )
    }

    export default Navbar
