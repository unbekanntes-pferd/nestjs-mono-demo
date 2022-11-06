import { Module } from '@nestjs/common';
import { ApiGwController } from './api-gw.controller';
import { ApiGwService } from './api-gw.service';
import { DummyModule } from './dummy/dummy.module';
import { Dummy2Module } from './dummy2/dummy2.module';

@Module({
  imports: [DummyModule, Dummy2Module],
  controllers: [ApiGwController],
  providers: [ApiGwService],
})
export class ApiGwModule {}
