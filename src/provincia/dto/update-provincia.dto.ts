import { PartialType } from '@nestjs/mapped-types';
import { CreateProvinciaDto } from './create-provincia.dto';
import {IsNumber, IsOptional,IsString} from 'class-validator';

export class UpdateProvinciaDto extends PartialType(CreateProvinciaDto) {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsNumber()
    @IsOptional()
    id?: number;
}
