import { Module } from '@nestjs/common';
import { TipoProduService } from './tipo-produ.service';
import { TipoProduController } from './tipo-produ.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TipoProdu, TipoProduSchema } from './entities/tipo-produ.entity';

@Module({
  controllers: [TipoProduController],
  providers: [TipoProduService],

  imports: [
    MongooseModule.forFeature([
      {
        name: TipoProdu.name, 
        schema: TipoProduSchema, 
      }
    ])
  ]
})
export class TipoProduModule {}
