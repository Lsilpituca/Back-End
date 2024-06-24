import { from } from "rxjs";
import {IsNotEmpty, IsString, IsNumber, IsPositive, IsOptional, IsInt, Min, isNotEmpty, isString } from "class-validator";


export class CreateLocalidadDto {

    @IsNotEmpty()
    @IsString()
    nombre : string;

    @IsNotEmpty()
    @IsNumber()
    codigoPostal :number;
}
