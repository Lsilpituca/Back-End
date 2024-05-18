import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        {
            id: 1,
            brand: 'Toyota', 
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda', 
            model: 'Civic'
        },
        {
            id: 1,
            brand: 'Peugeot', 
            model: '208'
        },
    ];

    findAll() {
        return this.products;
    }

    findOneById( id: number ){
        const product = this.products.find( product => product.id === id);

        if( !product ){
            throw new NotFoundException(`Product with id '${ id }' not found`);
        }

        return product;
    }

    addProduct(newProduct: { brand: string; model: string }) {
        const newProductId = this.products.length + 1; 
        
        const productToAdd = {
            id: newProductId,
            ...newProduct,
        };

        this.products.push(productToAdd);

        return productToAdd;
    }

    updateProduct(id: number, updatedProduct: { brand?: string; model?: string }) {
        const productIndex = this.products.findIndex(product => product.id === id);

        if (productIndex === -1) {
            throw new NotFoundException(`Product with id '${id}' not found`);
        }

        this.products[productIndex] = {
            ...this.products[productIndex],
            ...updatedProduct,
        };

        return this.products[productIndex];
    }

    deleteProduct(id: number) {
        const productIndex = this.products.findIndex(product => product.id === id);

        if (productIndex === -1) {
            throw new NotFoundException(`Product with id '${id}' not found`);
        }

        const deletedProduct = this.products.splice(productIndex, 1)[0];

        return deletedProduct;
    }

}
