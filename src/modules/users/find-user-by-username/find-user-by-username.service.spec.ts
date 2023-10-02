import { Test, TestingModule } from '@nestjs/testing';
import { FindUserByUsernameService } from './find-user-by-username.service';

describe('FindUserByUsernameService', () => {
  let service: FindUserByUsernameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindUserByUsernameService],
    }).compile();

    service = module.get<FindUserByUsernameService>(FindUserByUsernameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
