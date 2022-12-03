import { UserRequestModel, UserResponseModel } from "../model/user";

export interface UserRepository {
  createUser(user: UserRequestModel): Promise<UserResponseModel>
  loginUser(email: string, password: string): Promise<UserResponseModel>
}