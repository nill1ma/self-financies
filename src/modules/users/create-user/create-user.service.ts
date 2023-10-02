import { Injectable } from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';
import { UsersRepository } from '../repositories/users.repository';
import { UserAlreadyExist } from '../entities/errors';

@Injectable()
export class CreateUserService {
  constructor(private repository: UsersRepository) {}

  async create(data: UserDTO) {
    const userAlrearyExist = await this.repository.findUserByUsername(
      data.username,
    );

    if (userAlrearyExist) return new UserAlreadyExist();

    const user = await this.repository.create(data);
    return user;
  }
}
