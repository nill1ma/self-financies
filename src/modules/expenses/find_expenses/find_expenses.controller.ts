import { Controller } from '@nestjs/common';
import { FindExpensesService } from './find_expenses.service';

@Controller('find-expenses')
export class FindExpensesController {
  constructor(private readonly findExpensesService: FindExpensesService) {}
}
