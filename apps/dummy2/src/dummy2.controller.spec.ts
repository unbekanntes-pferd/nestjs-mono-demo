import { Test, TestingModule } from '@nestjs/testing';
import { Dummy2Controller } from './dummy2.controller';
import { Dummy2Service } from './dummy2.service';

describe('Dummy2Controller', () => {
  let dummy2Controller: Dummy2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Dummy2Controller],
      providers: [Dummy2Service],
    }).compile();

    dummy2Controller = app.get<Dummy2Controller>(Dummy2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dummy2Controller.getHello()).toBe('Hello World!');
    });
  });
});
