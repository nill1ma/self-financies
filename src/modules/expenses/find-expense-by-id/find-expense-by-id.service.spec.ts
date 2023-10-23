import { Test, TestingModule } from '@nestjs/testing';
import { FindExpenseByIdService } from './find-expense-by-id.service';

describe('FindExpenseByIdService', () => {
  let service: FindExpenseByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindExpenseByIdService],
    }).compile();

    service = module.get<FindExpenseByIdService>(FindExpenseByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
