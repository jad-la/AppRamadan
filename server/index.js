import express from 'express'
    import mongoose from 'mongoose'
    import cors from 'cors'
    import authRoutes from './routes/auth.js'
    import taskRoutes from './routes/tasks.js'

    const app = express()

    // Middleware
    app.use(cors())
    app.use(express.json())

    // Routes
    app.use('/api/auth', authRoutes)
    app.use('/api/tasks', taskRoutes)

    // MongoDB connection
    mongoose.connect('mongodb://localhost:27017/ramadan-tracker', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err))

    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
