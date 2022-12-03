import User from '../model/user'
import { UserRepository } from '../interface/user/repository/user-repository'
import { UserRequestModel, UserResponseModel } from '../interface/user/model/user'
import bcrypt from 'bcrypt'
import { compareHash } from '../../presentation/middleware/userMiddleware'

export class UserRepositoryImpl implements UserRepository {
  constructor() {
  }
  async createUser(user: UserRequestModel): Promise<UserResponseModel> {
    const saltRound = 8
    const obj = {
      name : user.name,
      email : user.email,
      password : await bcrypt.hash(user.password, saltRound)
    }
    const data = await User.create(obj)
    const result = {
      userId: data.userId,
      name: data.name,
      email: data.email,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }
    return result
  }

  async loginUser(email: string, password: string): Promise<UserResponseModel> {
    const data = await User.findOne({
      where: {email: email}
    })

    if(!data) {
      return {} as UserResponseModel
    }

    const match = await compareHash(password, data.password)
    
    if(!match) {
      return {} as UserResponseModel
    }

    const result = {
      userId: data.userId,
      name: data.name,
      email: data.email,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }

    return result 
    
  }

}