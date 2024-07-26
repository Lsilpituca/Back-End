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
}

export const ProvinciaSchema = SchemaFactory.createForClass(Provincia);
