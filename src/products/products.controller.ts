import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productsService: ProductsService
    ) {}

    /*  Endpoint para crear un nuevo producto
    @Post(): Crea un nuevo producto utilizando los datos proporcionados en el cuerpo de la solicitud (createProductsDto). 
    Llama al método create del servicio ProductsService.
    */
    @Post()
    create(@Body() createProductsDto: CreateProductsDto){
        return this.productsService.create(createProductsDto);
    }

    /*  Endpoint para obtener todos los productos
    @Get(): Obtiene todos los productos existentes. 
    Llama al método findAll del servicio ProductsService.
    */
    @Get()
    findAll(){
        return this.productsService.findAll();
    }

    /*  Endpoint para obtener un producto por su nombre
    @Get(':term'): Obtiene un producto específico por su nombre (term). 
    Llama al método findOne del servicio ProductsService.
    */
    @Get(':term')
    findOne(@Param('term') term:string){
        return this.productsService.findOne(term);
    }
    
    /*  Endpoint para actualizar un producto por su nombre
    @Patch(':term'): Actualiza un producto existente por su nombre (term) utilizando los datos proporcionados en el cuerpo de la solicitud (updateProductsDto).
    Llama al método update del servicio ProductsService.
    */
    @Patch(':term')
    update(@Param('term') term:string, @Body() updateProductsDto:UpdateProductsDto){
        return this.productsService.update(term, updateProductsDto);
    }

    /* Endpoint para eliminar un producto por su nombre
    @Delete(':term'): Elimina un producto existente por su nombre (term). 
    Llama al método delete del servicio ProductsService.
    */
    @Delete(':term')
    delete(@Param('term') term:string){
        return this.productsService.delete(term);
    }
}

/*
@Param('term'): Indica que el valor de term proviene de los parámetros de ruta (/products/:term). 
Se utiliza para obtener el nombre del producto en las operaciones de búsqueda, actualización y eliminación.

@Body(): Indica que el cuerpo de la solicitud contiene datos que deben ser utilizados
para crear (@Post()), actualizar (@Patch()), o modificar (@Put()) un producto.
*/
