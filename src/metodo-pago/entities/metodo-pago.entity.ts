import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class MetodoPago extends Document {

  @Prop({
    unique: true,
    index: true,
    required: true,
    type: String
  })
  nombre: string;

  @Prop({
    type: String,
    default: ''
  })
  desc: string;

  @Prop({
    required: true,
    type: Boolean
  })
  activo: boolean;

}
export const metodoPagoSchema = SchemaFactory.createForClass(MetodoPago);