import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Localidad extends Document {
  @Prop({
    required: true,
    index: true,
    type: String
  })
  nombre: String;

  @Prop({
    unique: true,
    required: true,
    index: true,
    type: Number,
  })
  codigoPostal: number;

  @Prop({ 
    type: String, 
    ref: 'provincia', 
    required: true 
  })
  nombreProvincia: String;

}

export const LocalidadSchema = SchemaFactory.createForClass(Localidad);
