import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductsSchema } from './entities/products.entity';

// El decorador @Module define un módulo de NestJS.
@Module({
  // controllers: Array de controladores que manejarán las solicitudes HTTP para este módulo.
  controllers: [ProductsController],

  // providers: Array de servicios que estarán disponibles para la inyección de dependencias en este módulo.
  providers: [ProductsService],

  // imports: Array de otros módulos que este módulo necesita para funcionar.
  imports: [
    // Configura MongooseModule para importar el esquema de los productos.
    MongooseModule.forFeature([
      {
        name: Products.name, // Nombre del modelo de Mongoose.
        schema: ProductsSchema, // Esquema de Mongoose para el modelo de productos.
      }
    ])
  ]
})
// Exporta la clase ProductsModule como un módulo de NestJS.
export class ProductsModule {}
