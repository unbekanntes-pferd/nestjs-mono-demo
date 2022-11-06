import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Dummy2Module } from './dummy2.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Dummy2Module,
    {
      transport: Transport.TCP,
      options: { port: 3002 },
    },
  );
  await app.listen();
}
bootstrap();
