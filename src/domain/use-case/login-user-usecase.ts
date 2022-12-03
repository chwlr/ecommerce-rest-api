import { LoginUserUseCase } from '../interface/user/use-case/login-user-usecase'
import { UserRepository } from '../interface/user/repository/user-repository'
import { UserResponseModel } from '../interface/user/model/user'


export class LoginUser implements LoginUserUseCase {
  userRepository : UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(email: string, password: string): Promise<UserResponseModel> {
    const result = await this.userRepository.loginUser(email, password)
    return result 
  }
}