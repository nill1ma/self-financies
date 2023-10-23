import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByUsernameService } from './find-user-by-username.service';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../../entities/user';
import { OpenApiEnum } from '../../consts/open-api.enum';
@ApiTags(OpenApiEnum.USER)
@Controller('find-user-by-username')
export class FindUserByUsernameController {
  constructor(
    private readonly findUserByUsernameService: FindUserByUsernameService,
  ) {}

  @Get(':username')
  @ApiParam({
    type: String,
    name: 'username',
  })
  @ApiResponse({ type: User })
  async handle(@Param('username') username: string) {
    const user =
      await this.findUserByUsernameService.findUserByUserName(username);
    return user;
  }
}
