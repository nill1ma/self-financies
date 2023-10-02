import { Module } from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';
import { DeleteUserController } from './delete-user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../repositories/users.repository';
import { UsersRepositoryImplementation } from '../repositories/users.repository.implementation';

@Module({
  controllers: [DeleteUserController],
  providers: [
    DeleteUserService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersRepositoryImplementation,
    },
  ],
})
export class DeleteUserModule {}
