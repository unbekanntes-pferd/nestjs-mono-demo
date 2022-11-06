import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDummyDto } from 'libs/common/dtos/create-dummy.dto';
import { Dummy } from 'libs/common/entities/dummy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DummyService {
  private logger = new Logger(DummyService.name);
  constructor(
    @InjectRepository(Dummy) private dummyRepository: Repository<Dummy>,
  ) {}
  async getDummy(id: string): Promise<Dummy> {
    const dummy = await this.dummyRepository.findOne({ where: { id } });

    if (!dummy) {
      this.logger.error(`Dummy with id ${id} not found.`);
      throw new RpcException('Dummy not found');
    }
    return dummy;
  }
  async deleteDummy(id: string): Promise<Dummy> {
    const dummy = await this.getDummy(id);

    return this.dummyRepository.remove(dummy);
  }
  getDummies(): Promise<Dummy[]> {
    return this.dummyRepository.find();
  }
  createDummy(dummyDto: CreateDummyDto) {
    const newDummy = this.dummyRepository.create({ ...dummyDto });

    return this.dummyRepository.save(newDummy);
  }
}
