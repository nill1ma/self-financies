import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { UserDTO } from '../dto/user.dto';
import { UserNotFound } from '../../../entities/errors';

@Injectable()
export class UpdateUserService {
  constructor(private repository: UsersRepository) {}

  async update(id: string, data: UserDTO) {
    const user = await this.repository.findById(id);
    if (!!!user) return new UserNotFound();
    return this.repository.update(id, data);
  }
}
