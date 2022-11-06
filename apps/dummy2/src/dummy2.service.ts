import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDummy2Dto } from 'libs/common/dtos/create-dummy2.dto';
import { Dummy2 } from 'libs/common/entities/dummy2.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Dummy2Service {
  private logger = new Logger(Dummy2Service.name);
  constructor(
    @InjectRepository(Dummy2) private Dummy2Repository: Repository<Dummy2>,
  ) {}
  async getDummy2(id: string): Promise<Dummy2> {
    const dummy2 = await this.Dummy2Repository.findOne({ where: { id } });

    if (!dummy2) {
      this.logger.error(`Dummy2 with id ${id} not found.`);
      throw new RpcException('Dummy2 not found');
    }
    return dummy2;
  }
  async deleteDummy2(id: string): Promise<Dummy2> {
    const dummy2 = await this.getDummy2(id);

    return this.Dummy2Repository.remove(dummy2);
  }
  getDummies(): Promise<Dummy2[]> {
    return this.Dummy2Repository.find();
  }
  createDummy2(Dummy2Dto: CreateDummy2Dto) {
    const newDummy2 = this.Dummy2Repository.create({ ...Dummy2Dto });

    return this.Dummy2Repository.save(newDummy2);
  }
}
