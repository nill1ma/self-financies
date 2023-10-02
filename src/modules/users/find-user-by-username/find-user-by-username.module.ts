import { Module } from '@nestjs/common';
import { FindUserByUsernameService } from './find-user-by-username.service';
import { FindUserByUsernameController } from './find-user-by-username.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../repositories/users.repository';
import { UsersRepositoryImplementation } from '../repositories/users.repository.implementation';

@Module({
  controllers: [FindUserByUsernameController],
  providers: [
    FindUserByUsernameService,
    PrismaService,
    { provide: UsersRepository, useClass: UsersRepositoryImplementation },
  ],
})
export class FindUserByUsernameModule {}
