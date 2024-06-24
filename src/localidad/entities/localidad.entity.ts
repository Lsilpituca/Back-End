import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Localidad extends Document {
  @Prop({
    unique: true,
    required: true,
    type: String,
  })
  nombre: string;

  @Prop({
    unique: true,
    required: true,
    type: Number,
    min: 0,
  })
  codigoPostal: number;
}

export const LocalidadSchema = SchemaFactory.createForClass(Localidad);
