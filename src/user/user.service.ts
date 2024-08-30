import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll() {
    return 'Hello World adding prisma and user';
  }
}
