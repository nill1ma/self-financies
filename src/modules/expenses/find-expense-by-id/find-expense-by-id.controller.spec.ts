import { Test, TestingModule } from '@nestjs/testing';
import { FindExpenseByIdController } from './find-expense-by-id.controller';
import { FindExpenseByIdService } from './find-expense-by-id.service';

describe('FindExpenseByIdController', () => {
  let controller: FindExpenseByIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindExpenseByIdController],
      providers: [FindExpenseByIdService],
    }).compile();

    controller = module.get<FindExpenseByIdController>(
      FindExpenseByIdController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
