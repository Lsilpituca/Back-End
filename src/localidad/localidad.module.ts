import { Module } from '@nestjs/common';
import { LocalidadService } from './localidad.service';
import { LocalidadController } from './localidad.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Localidad, LocalidadSchema } from './entities/localidad.entity';

@Module({
  controllers: [LocalidadController],
  providers: [LocalidadService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Localidad.name, 
        schema: LocalidadSchema, 
      }
    ])
  ]
})
export class LocalidadModule {}
