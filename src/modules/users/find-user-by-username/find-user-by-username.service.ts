import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { User } from '../../../entities/user';

@Injectable()
export class FindUserByUsernameService {
  constructor(private repository: UsersRepository) {}

  async findUserByUserName(username: string): Promise<User> {
    const user = await this.repository.findUserByUsername(username);
    return user;
  }
}
