import { Injectable } from '@nestjs/common';
import { ExpensesRepository } from '../repositories/expenses.repository';
import { Expense } from '../../../entities/expense';

@Injectable()
export class FindExpensesService {
  constructor(private repository: ExpensesRepository) {}

  async findAll(): Promise<Expense[]> {
    const expenses = await this.repository.findAll();
    return expenses;
  }
}
