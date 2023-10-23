import { Controller, Get } from '@nestjs/common';
import { FindExpensesService } from './find-expenses.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OpenApiEnum } from 'src/modules/consts/open-api.enum';
import { Expense } from '../../../entities/expense';

@ApiTags(OpenApiEnum.EXPENSE)
@Controller('find-expenses')
export class FindExpensesController {
  constructor(private readonly findExpensesService: FindExpensesService) {}

  @Get()
  @ApiResponse({ status: 200, type: [Expense] })
  async handle() {
    const expenses = await this.findExpensesService.findAll();
    return expenses;
  }
}
