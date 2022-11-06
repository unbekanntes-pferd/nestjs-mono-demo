import { Controller, Get } from '@nestjs/common';
import { ApiGwService } from './api-gw.service';

@Controller()
export class ApiGwController {
  constructor(private readonly apiGwService: ApiGwService) {}

  @Get('hello')
  getHello(): string {
    return this.apiGwService.getHello();
  }
}
