import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';
import { Localidad } from './entities/localidad.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class LocalidadService {
  constructor(
    @InjectModel(Localidad.name)
    private readonly localidadModel: Model<Localidad>,
  ) {}

  async create(CreateLocalidadDto: CreateLocalidadDto) {
    try {
      CreateLocalidadDto.nombre = CreateLocalidadDto.nombre.toLocaleLowerCase();

      const localidad = await this.localidadModel.create(CreateLocalidadDto);

      return localidad;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `location already exists ${JSON.stringify(error.keyValue)}`,
        );
      } else {
        console.log(error);
        throw new InternalServerErrorException(`Can't create location`);
      }
    }
  }

  async findAll(): Promise<Localidad[]> {
    return await this.localidadModel.find().exec();
  };

  async findOne(term: string) {
    let localidad: Localidad;
    localidad = await this.localidadModel.findOne({
      nombre: term.toLocaleLowerCase(),
    });

    if (!localidad)
      throw new NotFoundException(`Location with name: "${term}" not found`);

    return localidad; 
  }

 
  async update(term: string, updateLocalidad: UpdateLocalidadDto) {
    const localidad = await this.findOne(term);

    if (updateLocalidad.nombre) {
      updateLocalidad.nombre = updateLocalidad.nombre.toLocaleLowerCase();
    }

    await localidad.updateOne(UpdateLocalidadDto, { new: true });
    return 'location updated successfully';
  }
  async delete(term: string) {
    const localidad = await this.findOne(term);

    await localidad.deleteOne();
  }
}
