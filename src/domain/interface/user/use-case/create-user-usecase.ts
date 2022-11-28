import { UserRequestModel, UserResponseModel } from "../model/user";

export interface CreateUserUseCase {
  execute(user: UserRequestModel): Promise <UserResponseModel>;
}