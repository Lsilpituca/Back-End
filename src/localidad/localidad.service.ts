import { Injectable } from '@nestjs/common';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';

@Injectable()
export class LocalidadService {
  create(createLocalidadDto: CreateLocalidadDto) {
    return 'This action adds a new localidad';
  }

  findAll() {
    return `This action returns all localidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} localidad`;
  }

  update(id: number, updateLocalidadDto: UpdateLocalidadDto) {
    return `This action updates a #${id} localidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} localidad`;
  }
}
