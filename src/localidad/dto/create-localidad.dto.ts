import {IsNotEmpty, IsString, IsNumber} from "class-validator";


export class CreateLocalidadDto {

    @IsNotEmpty()
    @IsString()
    nombre : string;

    @IsNotEmpty()
    @IsNumber()
    codigoPostal :number;
}
