import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateUserService } from './update-user.service';
import { UserDTO } from '../dto/user.dto';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../../entities/user';
import { UserNotFound } from '../../../entities/errors';
import { OpenApiEnum } from '../../consts/open-api.enum';
@ApiTags(OpenApiEnum.USER)
@Controller('update-user')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Put(':id')
  @ApiParam({ type: String, name: 'id' })
  @ApiBody({ type: UserDTO })
  @ApiResponse({ type: User || UserNotFound })
  async update(@Param('id') id: string, @Body() data: UserDTO) {
    return await this.updateUserService.update(id, data);
  }
}
