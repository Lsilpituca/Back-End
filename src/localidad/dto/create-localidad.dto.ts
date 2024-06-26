import {IsNotEmpty, IsString, IsNumber, IsPositive, IsOptional, IsInt, Min } from "class-validator";


export class CreateLocalidadDto {

    @IsNotEmpty()
    @IsString()
    nombre : string;

    @IsNotEmpty()
    @IsNumber()
    codigoPostal :number;
}
