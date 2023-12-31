import { Test, TestingModule } from '@nestjs/testing';
import { DeleteUserController } from './delete-user.controller';
import { DeleteUserService } from './delete-user.service';

describe('DeleteUserController', () => {
  let controller: DeleteUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteUserController],
      providers: [DeleteUserService],
    }).compile();

    controller = module.get<DeleteUserController>(DeleteUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
