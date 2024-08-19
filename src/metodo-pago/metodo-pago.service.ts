import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMetodoPagoDto } from './dto/create-metodo-pago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodo-pago.dto';
import { MetodoPago } from './entities/metodo-pago.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MetodoPagoService {
  constructor(
    @InjectModel(MetodoPago.name)
    private readonly metodoPagoModel: Model<MetodoPago>,
  ) {}

  async create(createMetodoPagoDto: CreateMetodoPagoDto) {
    try {
      createMetodoPagoDto.nombre = createMetodoPagoDto.nombre.toLocaleLowerCase();
      const metodoPago = await this.metodoPagoModel.create(createMetodoPagoDto);

      return metodoPago;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `Metodo de Pago already exists ${JSON.stringify(error.keyValue)}`,
        );
      } else {
        console.log(error);
        throw new InternalServerErrorException(`Can't create Metodo de Pago`);
      }
    }
  }

  async findAll() {
    return await this.metodoPagoModel.find().exec();
  }

  async findOne(term: string) {
    let metodoPago: MetodoPago;

    metodoPago = await this.metodoPagoModel.findOne({
      nombre: term.toLocaleLowerCase(),
    });

    if (!metodoPago)
      throw new NotFoundException(`Metodo de Pago with name: "${term}" not found`);

    return metodoPago; 
  }

  async update(term: string, updateMetodoPagoDto: UpdateMetodoPagoDto) {
    const metodoPago = await this.findOne(term);

    if (updateMetodoPagoDto.nombre) {
      updateMetodoPagoDto.nombre = updateMetodoPagoDto.nombre.toLocaleLowerCase();
    }

    await metodoPago.updateOne(updateMetodoPagoDto, { new: true });
    return 'Metodo de Pago updated successfully';
  }

  async delete(term: string) {
    const metodoPago = await this.findOne(term);

    await metodoPago.deleteOne()
    return 'Metodo de Pago deleted successfully';
  }
}
