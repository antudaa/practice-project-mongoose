import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student.route'

const app: Application = express()

// Parsers
app.use(express.json())
app.use(cors())

// Application Routes
app.use('/api/v1/students', StudentRoutes)

// respond with "hello world" when a GET request is made to the homepage

app.get('/', (req: Request, res: Response) => {
  const a = 10
  res.send('hello world' + a)
})

export default app
