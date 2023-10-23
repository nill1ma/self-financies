import { ExpenseDTO } from '../dto/expense.dto';
import { Expense } from '../../../entities/expense';

export abstract class ExpensesRepository {
  abstract create(data: ExpenseDTO): Promise<Expense>;
  abstract update(id: string, data: ExpenseDTO): Promise<Expense>;
  abstract findAll(): Promise<Expense[]>;
  abstract findById(id: string): Promise<Expense>;
  // abstract findUserByUsername(username: string): Promise<Expense>;
  // abstract delete(id: string): Promise<string>;
}
