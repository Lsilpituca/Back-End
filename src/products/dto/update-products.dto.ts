import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsDto } from './create-products.dto';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class UpdateProductsDto extends PartialType(CreateProductsDto) {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    precio?: number;

    @IsOptional()
    @IsString()
    desc?: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    stock?: number;
}
