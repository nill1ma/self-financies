import { Injectable } from '@nestjs/common';
import { ExpensesRepository } from '../repositories/expenses.repository';
import { Expense } from '../../../entities/expense';
import { ExpenseDTO } from '../dto/expense.dto';

@Injectable()
export class CreateExpensesService {
  constructor(private repository: ExpensesRepository) {}

  async create(data: ExpenseDTO): Promise<Expense> {
    console.log(data.user_id, '   User IDDD');
    const expense = await this.repository.create(data);
    return expense;
  }
}
