import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import moment from 'moment-timezone'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from '../../../swagger.json'
import { router } from './routes'

const app = express()

// Definindo o formato dos logs
morgan.token('date', (req, res, tz) => moment().tz(tz).format('DD-MM-YYYY:HH:mm:ss'))

// Criando o formato 'myformat' para o morgan
morgan.format(
  'myformat',
  '[:date[America/Sao_Paulo]] :remote-addr :method :url [:status] :response-time ms - :res[content-length]\n',
)

// Para logar no terminal as requisições
app.use(morgan('myformat'))

app.use(express.json())

// Add headers
app.use(function (req: Request, res: Response, next: NextFunction) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Pass to next layer of middleware
  next()
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(cors())

app.use(router)

// Error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  res.status(400).json({ error: err.message })
})

export { app }
