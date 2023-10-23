import { Module } from '@nestjs/common';
import { FindExpensesService } from './find-expenses.service';
import { FindExpensesController } from './find-expenses.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ExpensesRepository } from '../repositories/expenses.repository';
import { ExpensesRepositoryImplementation } from '../repositories/expenses.repository.implementation';

@Module({
  controllers: [FindExpensesController],
  providers: [
    FindExpensesService,
    PrismaService,
    {
      provide: ExpensesRepository,
      useClass: ExpensesRepositoryImplementation,
    },
  ],
})
export class FindExpensesModule {}
