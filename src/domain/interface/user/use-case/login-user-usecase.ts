import { UserRequestModel, UserResponseModel } from "../model/user";

export interface LoginUserUseCase {
  execute(email: string, password: string): Promise <UserResponseModel>;
}