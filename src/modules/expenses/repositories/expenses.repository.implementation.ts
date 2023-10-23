import { PrismaService } from 'src/database/prisma.service';
import { ExpenseDTO } from '../dto/expense.dto';
import { Expense } from '../../../entities/expense';
import { ExpensesRepository } from './expenses.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpensesRepositoryImplementation implements ExpensesRepository {
  constructor(private prisma: PrismaService) {}

  // async findExpenseByExpensename(Expensename: string): Promise<Expense> {
  //   const Expense = await this.prisma.expense.findFirst({
  //     where: {
  //       Expensename,
  //     },
  //   });
  //   return Expense;
  // }

  async findAll(): Promise<Expense[]> {
    const Expenses = await this.prisma.expense.findMany();
    return Expenses;
  }

  async findById(id: string): Promise<Expense> {
    const Expense = await this.prisma.expense.findFirst({
      where: {
        id,
      },
    });
    return Expense;
  }

  async create(data: ExpenseDTO): Promise<Expense> {
    const expense = await this.prisma.expense.create({
      data: {
        destine: data.destine,
        value: data.value,
        payed_value: data.payed_value,
        pay_day: data.pay_day,
        due_date: data.due_date,
        user: {
          connect: {
            id: data.user_id,
          },
        },
      },
    });
    return expense;
  }

  async update(id: string, data: ExpenseDTO): Promise<Expense> {
    const Expense = await this.prisma.expense.update({
      where: {
        id,
      },
      data: {
        destine: data.destine,
        value: data.value,
        payed_value: data.payed_value,
        pay_day: data.pay_day,
        due_date: data.due_date,
      },
    });
    return Expense;
  }
  // async delete(id: string): Promise<string> {
  //   await this.prisma.expense.delete({
  //     where: {
  //       id,
  //     },
  //   });
  //   return 'Expense successful deleted!';
  // }
}
