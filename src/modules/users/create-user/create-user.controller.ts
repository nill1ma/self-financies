import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { UserDTO } from '../dto/user.dto';

@Controller('/create-user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}
  @Post()
  async create(@Body() data: UserDTO) {
    return this.createUserService.create(data);
  }
}
