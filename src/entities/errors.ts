export class UserAlreadyExist {
  code: string = 'USER_ALREADY_EXIST';
  message: string = 'User Already Exist, try another username!';
  status_code: number = 409;
}

export class UserNotFound {
  code: string = 'USER_NOT_FOUND';
  message: string = 'User not found!';
  status_code: number = 404;
}
