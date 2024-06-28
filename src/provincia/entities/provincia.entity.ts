import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Provincia extends Document {
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
  id: number;
}

export const ProvinciaSchema = SchemaFactory.createForClass(Provincia);
