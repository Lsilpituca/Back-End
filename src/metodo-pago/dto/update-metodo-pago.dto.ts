import { PartialType } from '@nestjs/mapped-types';
import { CreateMetodoPagoDto } from './create-metodo-pago.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateMetodoPagoDto extends PartialType(CreateMetodoPagoDto) {

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    desc?: string;
    
    @IsOptional()
    @IsBoolean()
    activo?: boolean;
    
}
