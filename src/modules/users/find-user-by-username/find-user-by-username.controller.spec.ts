import { Test, TestingModule } from '@nestjs/testing';
import { FindUserByUsernameController } from './find-user-by-username.controller';
import { FindUserByUsernameService } from './find-user-by-username.service';

describe('FindUserByUsernameController', () => {
  let controller: FindUserByUsernameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindUserByUsernameController],
      providers: [FindUserByUsernameService],
    }).compile();

    controller = module.get<FindUserByUsernameController>(
      FindUserByUsernameController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
