import server from './server'
import UserRouter from './presentation/routers/userRouter'
import { sequelizeConnection } from '../src/config/database'

(async () => {
  try {
    await sequelizeConnection.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  server.use('/', UserRouter())
  server.listen(3000, () => {
    console.log('listening on port 3000')
  })
})()
