import { Controller, Get } from '@nestjs/common';
import { FindUserService } from './find-users.service';

@Controller('find-user')
export class FindUserController {
  constructor(private readonly findUserService: FindUserService) {}
  @Get()
  async handle() {
    return this.findUserService.findUser();
  }
}
