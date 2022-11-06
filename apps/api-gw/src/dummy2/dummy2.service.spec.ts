import { Test, TestingModule } from '@nestjs/testing';
import { Dummy2Service } from './dummy2.service';

describe('Dummy2Service', () => {
  let service: Dummy2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Dummy2Service],
    }).compile();

    service = module.get<Dummy2Service>(Dummy2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
