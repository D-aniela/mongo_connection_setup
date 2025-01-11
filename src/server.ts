import express from 'express'
import * as dotenv from 'dotenv'

import router from './router'
import { connectDB } from './config/db'

const app = express()

dotenv.config()
connectDB()

app.use(express.json()) // Para que express entienda los JSON
app.use('/api', router)

export default app
