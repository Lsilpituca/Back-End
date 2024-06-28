import { IsNotEmpty, IsOptional, IsString } from "class-validator";



export class CreateClienteDto {

    
    @IsNotEmpty()
    @IsString()
    nombre: string;
  
    // El precio del producto es obligatorio, debe ser un número y debe ser positivo.
    @IsNotEmpty()
    @IsString()
    apellido: string;
  
    // La descripción del producto es opcional, pero si se proporciona, debe ser una cadena de texto.
    @IsNotEmpty()
    @IsString()
    domicilio: string;
  
    // El stock del producto es obligatorio, debe ser un número entero y debe ser mayor o igual a 0.
    @IsNotEmpty()
    @IsString()
    dni: string;

    @IsOptional()
    @IsString()
    correo: string;

    @IsNotEmpty()
    @IsString()
    id_localidad: string;



}
