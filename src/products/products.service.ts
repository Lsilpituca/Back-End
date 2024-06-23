import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { Products } from './entities/products.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Products.name)
        private readonly productsModel: Model<Products>
    ){}

    async create(create: CreateProductsDto) {

        const product = await this.productsModel.create(create);

        return product;
    }

}
