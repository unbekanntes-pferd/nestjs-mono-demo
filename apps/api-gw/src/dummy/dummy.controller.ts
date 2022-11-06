import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateDummyDto } from 'libs/common/dtos/create-dummy.dto';
import { FindOneParams } from 'libs/common/models/findone.params';

@Controller('dummy')
export class DummyController {
  private logger = new Logger(DummyController.name);
  constructor(@Inject('DUMMY_SERVICE') private dummyClient: ClientProxy) {}

  @Post()
  createDummy(@Body() dummyDto: CreateDummyDto) {
    this.logger.debug(`Received payload ${dummyDto.random}`);
    return this.dummyClient.send('createDummy', dummyDto);
  }

  @Get()
  getDummies() {
    return this.dummyClient.send('getDummies', null);
  }

  @Get(':id')
  getDummy(@Param() params: FindOneParams) {
    return this.dummyClient.send('getDummy', params.id);
  }

  @Delete(':id')
  deleteDummy(@Param() params: FindOneParams) {
    return this.dummyClient.send('deleteDummy', params.id);
  }
}
