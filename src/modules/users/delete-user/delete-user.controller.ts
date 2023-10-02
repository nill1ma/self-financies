import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';

@Controller('delete-user')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.deleteUserService.delete(id);
  }
}
