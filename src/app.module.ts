import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalidadModule } from './localidad/localidad.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { ClienteModule } from './cliente/cliente.module';
import { TipoProduModule } from './tipo-produ/tipo-produ.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/tiendaVirtual'),
    LocalidadModule,
    ProvinciaModule,
    ClienteModule,
    TipoProduModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
