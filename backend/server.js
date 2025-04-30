import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './db.js'
import userRoutes from './routes/user.js'
import widgetRoutes from './routes/widgets.js'
const app = express()

connectDB()

app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use('/api/user', userRoutes)
app.use('/api/widgets', widgetRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))