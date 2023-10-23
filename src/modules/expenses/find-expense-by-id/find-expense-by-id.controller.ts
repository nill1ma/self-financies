import { Controller, Get, Param } from '@nestjs/common';
import { FindExpenseByIdService } from './find-expense-by-id.service';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Expense } from '../../../entities/expense';
import { OpenApiEnum } from 'src/modules/consts/open-api.enum';

@ApiTags(OpenApiEnum.EXPENSE)
@Controller('find-expense-by-id')
export class FindExpenseByIdController {
  constructor(
    private readonly findExpenseByIdService: FindExpenseByIdService,
  ) {}

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ type: Expense })
  async handle(@Param('id') id: string) {
    return await this.findExpenseByIdService.findById(id);
  }
}
