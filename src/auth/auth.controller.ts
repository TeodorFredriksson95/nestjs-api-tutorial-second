import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { type } from 'os';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

//Controller recieves request from web, calls service.
//Controller returns response to client.
@Controller('auth')
export class AuthController {
  //instantiate AuthService class
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log(dto);
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}

//dto = data transer object
//dto is an object used to push data in order to validate or shape logic
