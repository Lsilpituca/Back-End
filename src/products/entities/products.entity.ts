import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Products extends Document {
    @Prop({
        unique: true,
        index: true,
        required: true,
        type: String
      })
      nombre: string;
    
      @Prop({
        required: true,
        type: Number,
        min: 0
      })
      precio: number;
    
      @Prop({
        type: String,
        default: ''
      })
      desc: string;
    
      @Prop({
        required: true,
        type: Number,
        min: 0
      })
      stock: number;
}
export const ProductsSchema = SchemaFactory.createForClass(Products);