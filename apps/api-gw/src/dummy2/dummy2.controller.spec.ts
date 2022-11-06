import { Test, TestingModule } from '@nestjs/testing';
import { Dummy2Controller } from './dummy2.controller';

describe('Dummy2Controller', () => {
  let controller: Dummy2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Dummy2Controller],
    }).compile();

    controller = module.get<Dummy2Controller>(Dummy2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
