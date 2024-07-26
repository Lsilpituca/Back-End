import {IsNotEmpty, IsString, IsNumber, IsMongoId} from "class-validator";


export class CreateLocalidadDto {

    @IsNotEmpty()
    @IsString()
    nombre : string;

    @IsNotEmpty()
    @IsNumber()
    codigoPostal :number;

    @IsNotEmpty()
    @IsString()
    nombreProvincia: string;
}
