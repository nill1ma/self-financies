import { Controller } from '@nestjs/common';
import { CreateExpensesService } from './create_expenses.service';

@Controller('create-expenses')
export class CreateExpensesController {
  constructor(private readonly createExpensesService: CreateExpensesService) {}
}
