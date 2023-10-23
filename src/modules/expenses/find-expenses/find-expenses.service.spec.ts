import { Test, TestingModule } from '@nestjs/testing';
import { FindExpensesService } from './find-expenses.service';

describe('FindExpensesService', () => {
  let service: FindExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindExpensesService],
    }).compile();

    service = module.get<FindExpensesService>(FindExpensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
