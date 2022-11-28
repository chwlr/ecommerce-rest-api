import { UserRequestModel, UserResponseModel } from "../model/user";

export interface UserRepository {
  createUser(user: UserRequestModel): Promise<UserResponseModel>;
}