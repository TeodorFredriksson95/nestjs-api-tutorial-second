import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './edit-user.dto';
import { UserService } from './user.service';

//personal edge case to remember -
//'  @UseGuards(AuthGuard('jwt'))' can be abstracted to reduce
// risk of error. See auth/guard/jwt.guard.ts for logic

//UseGuards(JwtGuard) is moved to @Controller level in order to protect
//everything concerning the 'users' from anything that does not
//provide a signed token
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  // @UseGuards() protects @Get('me') from being accessed
  // unless a valid token is presented
  // AuthGuard('jwt') is linked to JwtStrategy class

  // endpoint = /users/me
  @Get('me')
  //Add another @GetUser() with a param in order to recieve more specific data.
  //This is optionall, but useful. See comments in get-user.decorator.ts for more related info.
  //Also see example for implementation below in commented out code

  //getme(@GetUser() user: User, @GetUser('email') email: string{
  //     console.log({
  //         email,
  //     })
  //     return user;
  //   })
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
