import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { UserDTO } from '../dto/user.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../../entities/user';
import { OpenApiEnum } from '../../consts/open-api.enum';
@ApiTags(OpenApiEnum.USER)
@Controller('/create-user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}
  @Post()
  @ApiBody({ type: UserDTO })
  @ApiResponse({ type: User })
  async create(@Body() data: UserDTO) {
    return this.createUserService.create(data);
  }
}
