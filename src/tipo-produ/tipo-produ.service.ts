import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTipoProduDto } from './dto/create-tipo-produ.dto';
import { UpdateTipoProduDto } from './dto/update-tipo-produ.dto';
import { TipoProdu } from './entities/tipo-produ.entity.js';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoProduService {
  constructor(
    @InjectModel(TipoProdu.name)
    private readonly tipoProduModel: Model<TipoProdu>,
  ) {}

  async create(createTipoProduDto: CreateTipoProduDto) {
    try {
      createTipoProduDto.nombre = createTipoProduDto.nombre.toLocaleLowerCase();

      const tipoProdu = await this.tipoProduModel.create(createTipoProduDto);

      return tipoProdu;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `tipe product already exists ${JSON.stringify(error.keyValue)}`,
        );
      } else {
        console.log(error);
        throw new InternalServerErrorException(`Can't create tipe product`);
      }
    }
  }

  async findAll(): Promise<TipoProdu[]> {
    return await this.tipoProduModel.find().exec();
  };

  async findOne(term: string) {
    let tipoProdu: TipoProdu;
    if(!isNaN(+term)){
      tipoProdu = await this.tipoProduModel.findOne({id: term})
    }
    if (!tipoProdu){
      tipoProdu = await this.tipoProduModel.findOne({nombre: term.toLocaleLowerCase().trim()})
    }

    if (!tipoProdu)
      throw new NotFoundException(`tipe product with name or CP: "${term}" not found`);

    return tipoProdu; 
  }

 
  async update(term: string, updateTipoProduDto: UpdateTipoProduDto) {
    const tipoProdu = await this.findOne(term);

    if (updateTipoProduDto.nombre) {
      updateTipoProduDto.nombre = updateTipoProduDto.nombre.toLocaleLowerCase();
    }

    await tipoProdu.updateOne(updateTipoProduDto, { new: true });
    return 'tipe product updated successfully';
  }
  async delete(term: string) {
    const tipoProdu = await this.findOne(term);

    await tipoProdu.deleteOne();
  }
}
