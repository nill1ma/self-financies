import { Controller, Delete, Param } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteUserService } from './delete-user.service';
import { OpenApiEnum } from '../../consts/open-api.enum';
@ApiTags(OpenApiEnum.USER)
@Controller('delete-user')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete(':id')
  @ApiParam({ type: String, name: 'id' })
  @ApiResponse({ type: String })
  async delete(@Param('id') id: string) {
    return await this.deleteUserService.delete(id);
  }
}
