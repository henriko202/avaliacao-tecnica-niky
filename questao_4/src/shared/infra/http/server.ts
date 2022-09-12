import dotenv from 'dotenv'
import path from 'path'

import { app } from './app'

dotenv.config({
  path: path.resolve(__dirname, '..', '..', '..', '..', '.env'),
})

app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`))
