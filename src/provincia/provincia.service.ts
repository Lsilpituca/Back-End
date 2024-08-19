import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { Provincia } from './entities/provincia.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProvinciaService {
  constructor(
    @InjectModel(Provincia.name)
    private readonly provinciaModel: Model<Provincia>,
  ) {}

  async create(createProvinciaDto: CreateProvinciaDto) {
    try {
      createProvinciaDto.nombre = createProvinciaDto.nombre.toLocaleLowerCase();
      const provincia = await this.provinciaModel.create(createProvinciaDto);

      return provincia;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `Province already exists ${JSON.stringify(error.keyValue)}`,
        );
      } else {
        console.log(error);
        throw new InternalServerErrorException(`Can't create Province`);
      }
    }
  }

  async findAll(): Promise<Provincia[]> {
    return await this.provinciaModel.find().exec();
  };

  async findOne(term: string) {
    let provincia: Provincia;
    provincia = await this.provinciaModel.findOne({
      nombre: term.toLocaleLowerCase(),
    });

    if (!provincia)
      throw new NotFoundException(`Province with name: "${term}" not found`);

    return provincia; 
  }

 
  async update(term: string, updateProvincia: UpdateProvinciaDto) {
    const provincia = await this.findOne(term);

    if (updateProvincia.nombre) {
      updateProvincia.nombre = updateProvincia.nombre.toLocaleLowerCase();
    }

    await provincia.updateOne(updateProvincia, { new: true });
    return 'province updated successfully';
  }
  async delete(term: string) {
    const provincia = await this.findOne(term);

    await provincia.deleteOne();
  }
}
