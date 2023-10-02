import { Module } from '@nestjs/common';
import { FindUserService } from './find-users.service';
import { FindUserController } from './find-users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../repositories/users.repository';
import { UsersRepositoryImplementation } from '../repositories/users.repository.implementation';

@Module({
  controllers: [FindUserController],
  providers: [
    FindUserService,
    PrismaService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersRepositoryImplementation,
    },
  ],
})
export class FindUserModule {}
