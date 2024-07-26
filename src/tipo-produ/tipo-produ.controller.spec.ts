import { Test, TestingModule } from '@nestjs/testing';
import { TipoProduController } from './tipo-produ.controller';
import { TipoProduService } from './tipo-produ.service';

describe('TipoProduController', () => {
  let controller: TipoProduController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoProduController],
      providers: [TipoProduService],
    }).compile();

    controller = module.get<TipoProduController>(TipoProduController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
