import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService, ConfigService],
  exports: [PrismaService],
})
export class PrismaModule {}

// exports: {..} allows for service to be imported by other modules
//Downside is it demands module specific import. Fixed by making it global decorator
// exports: [PrismaService],
