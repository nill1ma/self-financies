import { Module } from '@nestjs/common';
import { UpdateExpensesService } from './update-expenses.service';
import { UpdateExpensesController } from './update-expenses.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ExpensesRepository } from '../repositories/expenses.repository';
import { ExpensesRepositoryImplementation } from '../repositories/expenses.repository.implementation';

@Module({
  controllers: [UpdateExpensesController],
  providers: [
    UpdateExpensesService,
    PrismaService,
    {
      provide: ExpensesRepository,
      useClass: ExpensesRepositoryImplementation,
    },
  ],
})
export class UpdateExpensesModule {}
