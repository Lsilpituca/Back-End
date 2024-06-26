import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalidadDto } from './create-localidad.dto';
import {IsNumber, IsOptional,IsString} from 'class-validator';


export class UpdateLocalidadDto extends PartialType(CreateLocalidadDto) {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsNumber()
    @IsOptional()
    codigoPostal?: number;
}
