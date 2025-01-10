import React from 'react'
    import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
    import './ProgressWidget.css'

    const ProgressWidget = ({ tasks }) => {
      const completedTasks = tasks.filter(task => task.completed).length
      const totalTasks = tasks.length
      const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

      const data = [
        { name: 'Complété', value: progress },
        { name: 'Restant', value: 100 - progress }
      ]

      const colors = ['#48bb78', '#e2e8f0']

      return (
        <div className="progress-widget">
          <h2>Progression</h2>
          
          <div className="progress-chart">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="progress-info">
            <span>{completedTasks} tâches complétées</span>
            <span>{totalTasks - completedTasks} tâches restantes</span>
          </div>
        </div>
      )
    }

    export default ProgressWidget
