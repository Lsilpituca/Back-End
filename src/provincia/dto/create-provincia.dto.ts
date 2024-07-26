import {IsNotEmpty, IsString, IsNumber, IsPositive, IsOptional, IsInt, Min } from "class-validator";


export class CreateProvinciaDto {
    @IsNotEmpty()
    @IsString()
    nombre : string;

}
