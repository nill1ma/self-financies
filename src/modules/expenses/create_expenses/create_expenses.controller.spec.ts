import { Test, TestingModule } from '@nestjs/testing';
import { CreateExpensesController } from './create_expenses.controller';
import { CreateExpensesService } from './create_expenses.service';

describe('CreateExpensesController', () => {
  let controller: CreateExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateExpensesController],
      providers: [CreateExpensesService],
    }).compile();

    controller = module.get<CreateExpensesController>(CreateExpensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
