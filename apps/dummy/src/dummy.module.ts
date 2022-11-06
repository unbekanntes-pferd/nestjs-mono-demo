import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dummy } from 'libs/common/entities/dummy.entity';
import configuration from './config/configuration';
import { DummyController } from './dummy.controller';
import { DummyService } from './dummy.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: './apps/dummy/.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('database.host'),
        port: config.get('database.port'),
        username: config.get('database.user'),
        password: config.get('database.password'),
        database: config.get('database.database'),
        entities: [Dummy],
        synchronize: false,
        migrations: ['dist/src/migrations/*.js'],
        cli: {
          migrationsDir: 'src/migrations',
        },
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Dummy]),
  ],
  controllers: [DummyController],
  providers: [DummyService],
})
export class DummyModule {}
