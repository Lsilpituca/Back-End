import { Module } from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
import { ProvinciaController } from './provincia.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Provincia, ProvinciaSchema } from './entities/provincia.entity';

@Module({
  controllers: [ProvinciaController],
  providers: [ProvinciaService],
  exports:[ProvinciaService],

  imports: [
    MongooseModule.forFeature([
      {
        name: Provincia.name, 
        schema: ProvinciaSchema, 
      }
    ])
  ]
})
export class ProvinciaModule {}
