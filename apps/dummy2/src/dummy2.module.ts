import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dummy2 } from 'libs/common/entities/dummy2.entity';
import configuration from './config/configuration';
import { Dummy2Controller } from './dummy2.controller';
import { Dummy2Service } from './dummy2.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: './apps/dummy2/.env',
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
        entities: [Dummy2],
        synchronize: false,
        migrations: ['dist/src/migrations/*.js'],
        cli: {
          migrationsDir: 'src/migrations',
        },
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Dummy2]),
  ],
  controllers: [Dummy2Controller],
  providers: [Dummy2Service],
})
export class Dummy2Module {}
