import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiGwService {
  getHello(): string {
    return 'Hello World!';
  }
}
