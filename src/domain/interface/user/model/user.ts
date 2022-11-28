export interface UserRequestModel {
  name : string,
  email : string,
  password : string
}

export interface UserResponseModel {
  userId : number,
  name : string,
  email : string,

  createdAt : Date,
  updatedAt : Date
}