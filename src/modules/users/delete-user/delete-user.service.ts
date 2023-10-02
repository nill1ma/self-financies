import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class DeleteUserService {
  constructor(private repository: UsersRepository) {}

  async delete(id: string) {
    return this.repository.delete(id);
  }
}
