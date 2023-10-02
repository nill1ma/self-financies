import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateExpensesModule } from './modules/expenses/create_expenses/create_expenses.module';
import { FindUserModule } from './modules/users/find-users/find-users.module';
import { FindExpensesModule } from './modules/expenses/find_expenses/find_expenses.module';
import { CreateUserModule } from './modules/users/create-user/create-user.module';
import { FindUserByUsernameModule } from './modules/users/find-user-by-username/find-user-by-username.module';
import { DeleteUserModule } from './modules/users/delete-user/delete-user.module';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
