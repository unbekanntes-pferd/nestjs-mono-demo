import { Module } from '@nestjs/common';
import { DummyController } from './dummy.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DUMMY_SERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
  providers: [],
  controllers: [DummyController],
})
export class DummyModule {}
