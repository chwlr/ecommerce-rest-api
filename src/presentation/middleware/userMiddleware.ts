import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const jwt_secret = `${process.env.JWT_SECRET}`

const compareHash = async (password: string, hashPassword:string): Promise<boolean> => {
  const match = await bcrypt.compare(password, hashPassword)
  return match
}

const authJwt = async (userId: number, email: string): Promise<string> => {
  const token = jwt.sign(
    { user_id: userId, email },
    jwt_secret,
    {
      expiresIn: "2h",
    }
  )
  return token
}

const verifyToken =async (rawToken:string): Promise<{} | string> => {
  const token = rawToken.split(' ')[1]
  try {
    const decoded = jwt.verify(token, jwt_secret)
    return decoded
  } catch (error) {
    return 'invalid token'
  }
}

export { compareHash, authJwt, verifyToken }