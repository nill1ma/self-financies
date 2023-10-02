import { Test, TestingModule } from '@nestjs/testing';
import { FindUserController } from './find-users.controller';
import { FindUserService } from './find-users.service';

describe('FindUserController', () => {
  let controller: FindUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindUserController],
      providers: [FindUserService],
    }).compile();

    controller = module.get<FindUserController>(FindUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
