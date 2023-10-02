import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { CreateUserController } from './create-user.controller';
import { UsersRepository } from '../repositories/users.repository';
import { UsersRepositoryImplementation } from '../repositories/users.repository.implementation';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [CreateUserController],
  providers: [
    CreateUserService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersRepositoryImplementation,
    },
  ],
})
export class CreateUserModule {}
