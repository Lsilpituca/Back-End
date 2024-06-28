import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsOptional, IsString, IsNumber, IsPositive, IsInt, Min, IsNotEmpty } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    apellido?: string;

    @IsOptional()
    @IsString()
    domicilio?: string;

    @IsOptional()
    @IsString()
    correo?: string;

    @IsOptional()
    @IsString()
    id_localidad?: string;

    @IsOptional()
    @IsString()
    dni?: string;


}
