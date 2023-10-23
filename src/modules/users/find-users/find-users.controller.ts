import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { FindUserService } from './find-users.service';
import { User } from '../../../entities/user';
import { OpenApiEnum } from '../../consts/open-api.enum';
@ApiTags(OpenApiEnum.USER)
@Controller('find-users')
export class FindUserController {
  constructor(private readonly findUserService: FindUserService) {}
  @Get()
  @ApiResponse({ type: [User] })
  async handle() {
    return this.findUserService.findUser();
  }
}
