import { IsNotEmpty, IsString, IsNumber, IsPositive, IsOptional, IsInt, Min } from 'class-validator';

export class CreateProductsDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    precio: number;

    @IsOptional()
    @IsString()
    desc: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    stock: number;
}