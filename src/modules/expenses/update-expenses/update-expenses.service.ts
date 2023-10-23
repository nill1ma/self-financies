import { Injectable } from '@nestjs/common';
import { Expense } from 'src/entities/expense';
import { ExpenseDTO } from '../dto/expense.dto';
import { ExpensesRepository } from '../repositories/expenses.repository';

@Injectable()
export class UpdateExpensesService {
  constructor(private repository: ExpensesRepository) {}

  async update(id: string, data: ExpenseDTO): Promise<Expense> {
    const expense = this.repository.update(id, data);
    return expense;
  }
}
