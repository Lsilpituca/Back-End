import {IsNotEmpty, IsString, IsNumber} from "class-validator";

export class CreateTipoProduDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    
    @IsNotEmpty()
    @IsNumber()
    id: number;

    
}
