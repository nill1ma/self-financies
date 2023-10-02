import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class FindUserService {
  constructor(private repository: UsersRepository) {}

  async findUser() {
    const users = await this.repository.findAll();
    return users;
  }
}
