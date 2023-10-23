import { Module } from '@nestjs/common';
import { FindExpenseByIdService } from './find-expense-by-id.service';
import { FindExpenseByIdController } from './find-expense-by-id.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ExpensesRepository } from '../repositories/expenses.repository';
import { ExpensesRepositoryImplementation } from '../repositories/expenses.repository.implementation';

@Module({
  controllers: [FindExpenseByIdController],
  providers: [
    FindExpenseByIdService,
    PrismaService,
    {
      provide: ExpensesRepository,
      useClass: ExpensesRepositoryImplementation,
    },
  ],
})
export class FindExpenseByIdModule {}
