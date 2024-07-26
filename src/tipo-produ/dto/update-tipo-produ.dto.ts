import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoProduDto } from './create-tipo-produ.dto';
import {IsNumber, IsOptional,IsString} from 'class-validator';

export class UpdateTipoProduDto extends PartialType(CreateTipoProduDto) {

    @IsString()
    @IsOptional()
    nombre?: string;

    @IsOptional()
    @IsNumber()
    id?: number;

    
}
