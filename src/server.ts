import express from 'express'
import { json } from 'body-parser'
import * as dotenv from 'dotenv'

dotenv.config()
const server = express()
server.use(json())

export default server