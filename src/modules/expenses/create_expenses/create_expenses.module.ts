import { Module } from '@nestjs/common';
import { CreateExpensesService } from './create_expenses.service';
import { CreateExpensesController } from './create_expenses.controller';

@Module({
  controllers: [CreateExpensesController],
  providers: [CreateExpensesService],
})
export class CreateExpensesModule {}
