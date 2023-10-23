import { Test, TestingModule } from '@nestjs/testing';
import { FindExpensesController } from './find-expenses.controller';
import { FindExpensesService } from './find-expenses.service';

describe('FindExpensesController', () => {
  let controller: FindExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindExpensesController],
      providers: [FindExpensesService],
    }).compile();

    controller = module.get<FindExpensesController>(FindExpensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
