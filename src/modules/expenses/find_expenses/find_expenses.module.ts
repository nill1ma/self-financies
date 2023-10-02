import { Module } from '@nestjs/common';
import { FindExpensesService } from './find_expenses.service';
import { FindExpensesController } from './find_expenses.controller';

@Module({
  controllers: [FindExpensesController],
  providers: [FindExpensesService],
})
export class FindExpensesModule {}
