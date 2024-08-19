import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { Products } from './entities/products.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TipoProduService } from 'src/tipo-produ/tipo-produ.service';

@Injectable()
export class ProductsService {
    //El constructor inyecta el modelo de Mongoose productsModel que se utilizará para interactuar con la colección de productos en la base de datos.
    constructor(
        @InjectModel(Products.name)
        private readonly productsModel: Model<Products>,
        private readonly TipoProduService: TipoProduService
    ) {}

    // Método para crear un nuevo producto
    async create(createProductsDto: CreateProductsDto) {
        try {
            // Convertir el nombre a minúsculas antes de crear el producto
            createProductsDto.nombre = createProductsDto.nombre.toLocaleLowerCase();
            
            const tipoProdu = await this.TipoProduService.findOne(createProductsDto.nombreTipoP);
            // Crear el producto en la base de datos
            const product = await this.productsModel.create(createProductsDto);
            
            return product; // Devolver el producto creado
        } catch (error) {
            // Manejar errores específicos como duplicados (clave única)
            if (error instanceof NotFoundException) {
                // Si es una NotFoundException, volver a lanzar el error
                throw error;
            }
            if (error.code === 11000) {
                throw new BadRequestException(`Product already exists ${JSON.stringify(error.keyValue)}`);
            }
            else {
                console.log(error); // Log de otros errores para depuración
                throw new InternalServerErrorException(`Can't create product`);
            }
        }
    }

    // Método para obtener todos los productos
    async findAll(): Promise<Products[]> {
        return await this.productsModel.find().exec();
    }

    // Método para encontrar un producto por su nombre
    async findOne(term: string) {
        let product: Products;
        
        // Buscar el producto en la base de datos por el nombre (en minúsculas)
        product = await this.productsModel.findOne({ nombre: term.toLocaleLowerCase() });
        
        // Manejar el caso donde no se encuentra el producto
        if (!product) throw new NotFoundException(`Product with name: "${term}" not found`);
        
        return product; // Devolver el producto encontrado
    }

    // Método para actualizar un producto por su nombre
    async update(term: string, updateProductsDto: UpdateProductsDto) {
        const product = await this.findOne(term);
        
        // Transformar el nombre a minúsculas si está presente en el DTO de actualización
        if (updateProductsDto.nombre) {
            updateProductsDto.nombre = updateProductsDto.nombre.toLocaleLowerCase();
        }
        
        // Actualizar el producto en la base de datos y devolver un mensaje de éxito
        await product.updateOne(updateProductsDto, { new: true });
        return "Product updated successfully";
    }

    // Método para eliminar un producto por su nombre
    async delete(term: string) {
        const product = await this.findOne(term);
        
        // Eliminar el producto de la base de datos
        await product.deleteOne();
        return 'product deleted successfully'
    }
}
