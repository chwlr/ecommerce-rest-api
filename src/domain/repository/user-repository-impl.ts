import User from '../model/user'
import { UserRepository } from '../interface/user/repository/user-repository'
import { UserRequestModel, UserResponseModel } from '../interface/user/model/user'

export class UserRepositoryImpl implements UserRepository {
  constructor() {
  }
  async createUser(user: UserRequestModel): Promise<UserResponseModel> {
    const saltRound = 8
    let obj = {
      name : user.name,
      email : user.email,
      password : user.password
    }
    const data = await User.create(obj)
    return data
  }
}