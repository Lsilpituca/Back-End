import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// El decorador @Schema indica que esta clase representa un esquema de Mongoose.
@Schema()
export class Products extends Document {
  // @Prop define una propiedad del esquema.
  // El campo 'nombre' es único, está indexado, es requerido y su tipo es String.
  @Prop({
    unique: true,
    index: true,
    required: true,
    type: String
  })
  nombre: string;

  @Prop({
    index: true,
    required: true,
    type: String
  })
  nombreTipoP: string;

  // El campo 'precio' es requerido, su tipo es Number y debe ser mayor o igual a 0.
  @Prop({
    required: true,
    type: Number,
    min: 0
  })
  precio: number;

  // El campo 'desc' es opcional, su tipo es String y su valor por defecto es una cadena vacía.
  @Prop({
    type: String,
    default: ''
  })
  desc: string;

  // El campo 'stock' es requerido, su tipo es Number y debe ser mayor o igual a 0.
  @Prop({
    required: true,
    type: Number,
    min: 0
  })
  stock: number;
}

// Crea un esquema de Mongoose basado en la clase 'Products'.
// SchemaFactory.createForClass toma la clase y la transforma en un esquema de Mongoose.
export const ProductsSchema = SchemaFactory.createForClass(Products);