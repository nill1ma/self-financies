import { Test, TestingModule } from '@nestjs/testing';
import { UpdateExpensesController } from './update-expenses.controller';
import { UpdateExpensesService } from './update-expenses.service';

describe('UpdateExpensesController', () => {
  let controller: UpdateExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateExpensesController],
      providers: [UpdateExpensesService],
    }).compile();

    controller = module.get<UpdateExpensesController>(UpdateExpensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
