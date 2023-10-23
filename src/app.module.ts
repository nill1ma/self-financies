import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateExpensesModule } from './modules/expenses/create-expenses/create-expenses.module';
import { FindExpenseByIdModule } from './modules/expenses/find-expense-by-id/find-expense-by-id.module';
import { FindExpensesModule } from './modules/expenses/find-expenses/find-expenses.module';
import { UpdateExpensesModule } from './modules/expenses/update-expenses/update-expenses.module';
import { CreateUserModule } from './modules/users/create-user/create-user.module';
import { DeleteUserModule } from './modules/users/delete-user/delete-user.module';
import { FindUserByUsernameModule } from './modules/users/find-user-by-username/find-user-by-username.module';
import { FindUserModule } from './modules/users/find-users/find-users.module';
import { UpdateUserModule } from './modules/users/update-user/update-user.module';

@Module({
  imports: [
    FindUserModule,
    CreateExpensesModule,
    CreateExpensesModule,
    FindExpensesModule,
    CreateUserModule,
    FindUserModule,
    FindUserByUsernameModule,
    DeleteUserModule,
    UpdateUserModule,
    FindExpenseByIdModule,
    FindExpenseByIdModule,
    UpdateExpensesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
