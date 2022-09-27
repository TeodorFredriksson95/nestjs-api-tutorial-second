import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';

@Module({
  imports: [JwtModule.register({})],
  //controllers recieve requests, calls providers or services
  //and returns response to client
  controllers: [AuthController],
  //providers contain businesslogic
  providers: [AuthService, ConfigService, JwtStrategy],
})
export class AuthModule {}

// import { PrismaModule } from 'src/prisma/prisma.module';

//   imports: [PrismaModule],
