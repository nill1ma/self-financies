import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByUsernameService } from './find-user-by-username.service';

@Controller('find-user-by-username')
export class FindUserByUsernameController {
  constructor(
    private readonly findUserByUsernameService: FindUserByUsernameService,
  ) {}

  @Get(':username')
  async handle(@Param('username') username: string) {
    const user =
      await this.findUserByUsernameService.findUserByUserName(username);
    return user;
  }
}
