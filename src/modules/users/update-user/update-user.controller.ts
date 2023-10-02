import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateUserService } from './update-user.service';
import { UserDTO } from '../dto/user.dto';

@Controller('update-user')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UserDTO) {
    return await this.updateUserService.update(id, data);
  }
}
