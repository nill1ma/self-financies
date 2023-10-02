import { UserDTO } from '../dto/user.dto';
import { User } from '../entities/user';

export abstract class UsersRepository {
  abstract create(data: UserDTO): Promise<User>;
  abstract update(id: string, data: UserDTO): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract findById(id: string): Promise<User>;
  abstract findUserByUsername(username: string): Promise<User>;
  abstract delete(id: string): Promise<string>;
}
