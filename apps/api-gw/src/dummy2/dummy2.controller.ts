import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateDummy2Dto } from 'libs/common/dtos/create-dummy2.dto';
import { FindOneParams } from 'libs/common/models/findone.params';

@Controller('dummy2')
export class Dummy2Controller {
  constructor(@Inject('DUMMY2_SERVICE') private dummy2Client: ClientProxy) {}

  @Post()
  createDummy(@Body() dummy2Dto: CreateDummy2Dto) {
    return this.dummy2Client.send('createDummy2', dummy2Dto);
  }

  @Get()
  getDummies() {
    return this.dummy2Client.send('getDummies2', null);
  }

  @Get(':id')
  getDummy(@Param() params: FindOneParams) {
    return this.dummy2Client.send('getDummy2', params.id);
  }

  @Delete(':id')
  deleteDummy(@Param() params: FindOneParams) {
    return this.dummy2Client.send('deleteDummy2', params.id);
  }
}
