import {CreateUserUseCase} from '../interface/user/use-case/create-user-usecase'
import { UserRepository } from '../interface/user/repository/user-repository'
import { UserRequestModel, UserResponseModel } from '../interface/user/model/user'
import bcrypt from 'bcrypt'

export class CreateUser implements CreateUserUseCase {
  userRepository : UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(user: UserRequestModel): Promise<UserResponseModel> {
    const saltRound = 8
    const obj = {
      name : user.name,
      email : user.email,
      password : await bcrypt.hash(user.password, saltRound)
    }
    const result = await this.userRepository.createUser(obj)
    return result 
  }
}