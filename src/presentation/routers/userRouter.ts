import express , { Request, Response } from 'express'
import {CreateUserUseCase} from '../../domain/interface/user/use-case/create-user-usecase'

export default function UserRouter(createUserUseCase: CreateUserUseCase) {
  const router = express.Router()

  router.post('/api/user/signup', async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    const data = await createUserUseCase.execute(req.body)

    res.status(200).send({ data: data, message: "api/user/signup" })
  })

  return router
}
