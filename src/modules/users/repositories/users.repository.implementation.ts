import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from '../dto/user.dto';
import { User } from '../../../entities/user';
import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepositoryImplementation implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findUserByUsername(username: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        username,
      },
    });
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    return user;
  }

  async create(data: UserDTO): Promise<User> {
    const user = await this.prisma.user.create({
      data,
    });
    return user;
  }

  async update(id: string, data: UserDTO): Promise<User> {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        username: data.username,
        password: data.password,
      },
    });
    return user;
  }
  async delete(id: string): Promise<string> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return 'User successful deleted!';
  }
}
