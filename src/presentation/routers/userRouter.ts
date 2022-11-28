import express , { Request, Response } from 'express'

export default function UserRouter() {
  const router = express.Router()

  router.post('/api/user/signup', async (req: Request, res: Response) => {
    res.status(200).send({ data: "data", message: "api/user/signup" })
  })

  return router
}
