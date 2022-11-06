import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateDummyDto } from 'libs/common/dtos/create-dummy.dto';
import { DummyService } from './dummy.service';

@Controller()
export class DummyController {
  logger = new Logger(DummyController.name);

  constructor(private readonly dummyService: DummyService) {}

  @MessagePattern('getDummies')
  getDummies() {
    return this.dummyService.getDummies();
  }

  @MessagePattern('createDummy')
  createDummy(dummyDto: CreateDummyDto) {
    return this.dummyService.createDummy(dummyDto);
  }

  @MessagePattern('getDummy')
  getDummy(id: string) {
    return this.dummyService.getDummy(id);
  }

  @MessagePattern('deleteDummy')
  deleteDummy(id: string) {
    return this.dummyService.deleteDummy(id);
  }
}
