import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TipoProdu extends Document {
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
  })
  id: number;

  
}

export const TipoProduSchema = SchemaFactory.createForClass(TipoProdu);