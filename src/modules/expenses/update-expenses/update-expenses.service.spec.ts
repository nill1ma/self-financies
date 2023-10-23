import { Test, TestingModule } from '@nestjs/testing';
import { UpdateExpensesService } from './update-expenses.service';

describe('UpdateExpensesService', () => {
  let service: UpdateExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateExpensesService],
    }).compile();

    service = module.get<UpdateExpensesService>(UpdateExpensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
