import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateDummy2Dto } from 'libs/common/dtos/create-dummy2.dto';
import { Dummy2Service } from './dummy2.service';

@Controller()
export class Dummy2Controller {
  logger = new Logger(Dummy2Controller.name);

  constructor(private readonly dummy2Service: Dummy2Service) {}

  @MessagePattern('getDummies2')
  getDummies() {
    return this.dummy2Service.getDummies();
  }

  @MessagePattern('createDummy2')
  createDummy(dummyDto: CreateDummy2Dto) {
    return this.dummy2Service.createDummy2(dummyDto);
  }

  @MessagePattern('getDummy2')
  getDummy(id: string) {
    return this.dummy2Service.getDummy2(id);
  }

  @MessagePattern('deleteDummy2')
  deleteDummy(id: string) {
    return this.dummy2Service.deleteDummy2(id);
  }
}
