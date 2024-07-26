import { Module } from '@nestjs/common';
import { LocalidadService } from './localidad.service';
import { LocalidadController } from './localidad.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Localidad, LocalidadSchema } from './entities/localidad.entity';
import { Provincia, ProvinciaSchema } from '../provincia/entities/provincia.entity';
import { ProvinciaModule } from '../provincia/provincia.module';

@Module({
  controllers: [LocalidadController],
  providers: [LocalidadService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Localidad.name, 
        schema: LocalidadSchema, 
      },
      { 
        name: Provincia.name, 
        schema: ProvinciaSchema 
      }
    ]),
    ProvinciaModule,
  ]
})
export class LocalidadModule {}
