import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productsService: ProductsService
    ) {}
    
    @Get()
    getAllProducts(){
        return this.productsService.findAll();  
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: string){
        return this.productsService.findOneById(+id); 
    }

    @Post()
    addProduct(@Body() newProduct: { brand: string; model: string }) {
        return this.productsService.addProduct(newProduct);
    }
    
    @Put(':id')
    updateProduct(@Param('id', ParseIntPipe) id: number, @Body() updatedProduct: { brand?: string; model?: string }) {
        return this.productsService.updateProduct(id, updatedProduct);
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.deleteProduct(id);
    }
}

