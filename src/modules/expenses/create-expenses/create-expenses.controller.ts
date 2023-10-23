import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OpenApiEnum } from 'src/modules/consts/open-api.enum';
import { ExpenseDTO } from '../dto/expense.dto';
import { Expense } from '../../../entities/expense';
import { CreateExpensesService } from './create-expenses.service';

@ApiTags(OpenApiEnum.EXPENSE)
@Controller('create-expenses')
export class CreateExpensesController {
  constructor(private readonly createExpensesService: CreateExpensesService) {}

  @Post()
  @ApiBody({ type: ExpenseDTO })
  @ApiResponse({ type: Expense })
  async create(@Body() data: ExpenseDTO) {
    return this.createExpensesService.create(data);
  }
}
