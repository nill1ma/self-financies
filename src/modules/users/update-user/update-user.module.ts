import { Module } from '@nestjs/common';
import { UpdateUserService } from './update-user.service';
import { UpdateUserController } from './update-user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../repositories/users.repository';
import { UsersRepositoryImplementation } from '../repositories/users.repository.implementation';

@Module({
  controllers: [UpdateUserController],
  providers: [
    UpdateUserService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersRepositoryImplementation,
    },
  ],
})
export class UpdateUserModule {}
