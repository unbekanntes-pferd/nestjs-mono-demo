import { Module } from '@nestjs/common';
import { Dummy2Controller } from './dummy2.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DUMMY2_SERVICE',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
  providers: [],
  controllers: [Dummy2Controller],
})
export class Dummy2Module {}
