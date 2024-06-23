import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productsService: ProductsService
    ) {}
    
    @Post()
    create(@Body() createProductsDto: CreateProductsDto){
        return this.productsService.create(createProductsDto);
    }

}

