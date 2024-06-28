import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// El decorador @Schema indica que esta clase representa un esquema de Mongoose.
@Schema()
export class Cliente extends Document {
 
  @Prop({
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
  apellido: string;

  // El campo 'desc' es opcional, su tipo es String y su valor por defecto es una cadena vacía.
  @Prop({
    required: true,
    type: String
  })
  domicilio: string;

  // El campo 'stock' es requerido, su tipo es Number y debe ser mayor o igual a 0.
  @Prop({ 
    type: String
  })
  correo: string;

  @Prop({
    unique: true,
    index: true,
    required: true,
    type: String
  })
  dni: string;

  @Prop({
    required: true,
    type: String
  })
  id_localidad: string;



}

