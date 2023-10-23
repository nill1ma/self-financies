import { Module } from '@nestjs/common';
import { CreateExpensesService } from './create-expenses.service';
import { CreateExpensesController } from './create-expenses.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ExpensesRepository } from '../repositories/expenses.repository';
import { ExpensesRepositoryImplementation } from '../repositories/expenses.repository.implementation';

@Module({
  controllers: [CreateExpensesController],
  providers: [
    CreateExpensesService,
    PrismaService,
    {
      provide: ExpensesRepository,
      useClass: ExpensesRepositoryImplementation,
    },
  ],
})
export class CreateExpensesModule {}
