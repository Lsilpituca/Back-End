import { Test, TestingModule } from '@nestjs/testing';
import { TipoProduService } from './tipo-produ.service';

describe('TipoProduService', () => {
  let service: TipoProduService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoProduService],
    }).compile();

    service = module.get<TipoProduService>(TipoProduService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
