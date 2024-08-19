import { Module } from '@nestjs/common';
import { MetodoPagoService } from './metodo-pago.service';
import { MetodoPagoController } from './metodo-pago.controller';
import { MetodoPago, metodoPagoSchema } from './entities/metodo-pago.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [MetodoPagoController],
  providers: [MetodoPagoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: MetodoPago.name,
        schema: metodoPagoSchema, 
      }
    ]),
  ]
})
export class MetodoPagoModule {}
