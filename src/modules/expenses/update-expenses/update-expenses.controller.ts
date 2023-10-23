import { Controller } from '@nestjs/common';
import { UpdateExpensesService } from './update-expenses.service';

@Controller('update-expenses')
export class UpdateExpensesController {
  constructor(private readonly updateExpensesService: UpdateExpensesService) {}
}
