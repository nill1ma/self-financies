import { Test, TestingModule } from '@nestjs/testing';
import { CreateExpensesService } from './create-expenses.service';

describe('CreateExpensesService', () => {
  let service: CreateExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateExpensesService],
    }).compile();

    service = module.get<CreateExpensesService>(CreateExpensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
