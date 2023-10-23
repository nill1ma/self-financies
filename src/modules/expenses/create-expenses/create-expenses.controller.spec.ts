import { Test, TestingModule } from '@nestjs/testing';
import { CreateExpensesController } from './create-expenses.controller';
import { CreateExpensesService } from './create-expenses.service';

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
