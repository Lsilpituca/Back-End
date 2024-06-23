import { IsNotEmpty, IsString, IsNumber, IsPositive, IsOptional, IsInt, Min } from 'class-validator';

// Esta clase define el DTO para crear un producto, con validaciones aplicadas a cada propiedad.
export class CreateProductsDto {

  // El nombre del producto es obligatorio y debe ser una cadena de texto.
  @IsNotEmpty()
  @IsString()
  nombre: string;

  // El precio del producto es obligatorio, debe ser un número y debe ser positivo.
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  precio: number;

  // La descripción del producto es opcional, pero si se proporciona, debe ser una cadena de texto.
  @IsOptional()
  @IsString()
  desc: string;

  // El stock del producto es obligatorio, debe ser un número entero y debe ser mayor o igual a 0.
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  stock: number;
}
/*Un DTO (Data Transfer Object) es un objeto que se utiliza para transferir datos 
entre diferentes partes de una aplicación. 
En el contexto de NestJS, los DTOs se utilizan principalmente para definir la forma y las validaciones 
de los datos que se reciben en las solicitudes HTTP y se envían en las respuestas HTTP.
*/