import server from './server'
import UserRouter from './presentation/routers/userRouter'
import { sequelizeConnection } from '../src/config/database'
import { UserRepositoryImpl } from './domain/repository/user-repository-impl'
import { CreateUser } from './domain/use-case/create-user-usecase'
import { LoginUser } from './domain/use-case/login-user-usecase'

(async () => {
  try {
    await sequelizeConnection.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  const RouterMiddleware = UserRouter(
    new CreateUser(new UserRepositoryImpl),
    new LoginUser(new UserRepositoryImpl),
  )

  server.use('/', RouterMiddleware)
  server.listen(3000, () => {
    console.log('listening on port 3000')
  })
})()
