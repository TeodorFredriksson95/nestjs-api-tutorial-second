import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  //endpoint = /users/me
  @Get('me')
  getMe() {
    return 'user info';
  }
}
