import { Test, TestingModule } from '@nestjs/testing';
import { ApiGwController } from './api-gw.controller';
import { ApiGwService } from './api-gw.service';

describe('ApiGwController', () => {
  let apiGwController: ApiGwController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiGwController],
      providers: [ApiGwService],
    }).compile();

    apiGwController = app.get<ApiGwController>(ApiGwController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiGwController.getHello()).toBe('Hello World!');
    });
  });
});
