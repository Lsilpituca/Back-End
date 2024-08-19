import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMetodoPagoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    desc: string;
    
    @IsNotEmpty()
    @IsBoolean()
    activo: boolean;
}
