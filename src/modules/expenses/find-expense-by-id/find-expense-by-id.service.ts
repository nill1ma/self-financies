import { Injectable } from '@nestjs/common';
import { ExpensesRepository } from '../repositories/expenses.repository';
import { Expense } from '../../../entities/expense';

@Injectable()
export class FindExpenseByIdService {
  constructor(private repository: ExpensesRepository) {}

  async findById(id: string): Promise<Expense> {
    const expense = await this.repository.findById(id);
    return expense;
  }
}
