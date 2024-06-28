import { BadGatewayException, BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { error } from 'console';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ClienteService {

    constructor(
      @InjectModel(Cliente.name)
      private readonly clientesModel: Model<Cliente>
  ) {}

    async create(createClienteDto: CreateClienteDto) {
      try {
        const cliente = await this.clientesModel.create(createClienteDto);

        return cliente;
      }   catch (error) {
          if (error.code == 11000) {
            throw new BadRequestException(`Cliente already exists ${JSON.stringify(error.keyValue)}`);
          }   else {
              console.log(error);
              throw new InternalServerErrorException(`Can't create cliente`);
          }
    }
  }

    async findAll() {
      return await this.clientesModel.find().exec();
  }

    async findOne(dni: string) {
      let cliente: Cliente;

      cliente = await this.clientesModel.findOne({ dni });

      if (!cliente) throw new NotFoundException(`Product with name: "${dni}" not found`);

      return cliente;
  }

    async update(dni: string, updateClienteDto: UpdateClienteDto) {
      const cliente = await this.findOne(dni);

      await cliente.updateOne(updateClienteDto, { new: true });
      return "Cliente updated successfully";
  }

    async delete(dni: string) {
      const cliente = await this.findOne(dni);

      await cliente.deleteOne();
  }

}
