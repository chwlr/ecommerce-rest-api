import express , { NextFunction, Request, Response } from 'express'
import { CreateUserUseCase } from '../../domain/interface/user/use-case/create-user-usecase'
import { LoginUserUseCase } from '../../domain/interface/user/use-case/login-user-usecase'
import { authJwt, verifyToken } from '../middleware/userMiddleware'

export default function UserRouter(
  createUserUseCase: CreateUserUseCase,
  loginUserUseCase: LoginUserUseCase
  ) {
  const router = express.Router()

  router.post('/api/user/signup', async (req: Request, res: Response) => {
    try {
      const data = await createUserUseCase.execute(req.body)
      res.status(200).send({ code: '201', status: 'account created', data: data })
    } catch (error) {
      res.status(500).send({ statusCode: "500", message: "error" })
    }

  })

  router.post('/api/user/login', async (req: Request, res: Response) => {
    const { email, password } = req.body
    const data = await loginUserUseCase.execute(email, password)

    if(data.email !== email){
      res.status(500).send({ code: "500", status: 'invalid email or password' })
    }

    const token = await authJwt(data.userId, data.email)
    
    res.status(200).send({code: '200', status: 'success login', data : data, token : token})
  })

  router.get('/api/user/me', async (req: Request, res: Response) => {
    const isTokenExist = req.body.token || req.query.token || req.headers['authorization']
    if(!isTokenExist){
      res.status(500).send({ code: "500", status: 'bad guy found' })
    }
    const isVerified = await verifyToken(isTokenExist)
    if(isVerified === 'invalid token'){
      res.status(500).send({ code: "500", status: 'bad guy found' })
    }else{
      res.status(200).send({code: '200', status: 'success'})
    }
  })



  return router
}
