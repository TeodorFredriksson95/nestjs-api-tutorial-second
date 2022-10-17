//part of barren export pattern
//custom guard used to reduce likelyhood of errors while passing
//through AuthGuard

import { AuthGuard } from '@nestjs/passport';

export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
