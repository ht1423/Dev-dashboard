import './config.js'
import express from 'express'
import cors from 'cors'
import connectDB from './db.js'
import userRoutes from './routes/user.js'
import widgetRoutes from './routes/widgets.js'
import session from 'express-session'
import githubRoutes from './routes/github.js'

const app = express()

connectDB()

app.use(express.json())

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 
    }
}))

app.use('/api/user', userRoutes)
app.use('/api/widgets', widgetRoutes)
app.use('/api/github', githubRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))