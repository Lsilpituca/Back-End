import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocalidadService } from './localidad.service';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';

@Controller('localidad')
export class LocalidadController {
  constructor(private readonly localidadService: LocalidadService) {}

  @Post()
  create(@Body() createLocalidadDto: CreateLocalidadDto) {
    return this.localidadService.create(createLocalidadDto);
  }

  @Get()
  findAll() {
    return this.localidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.localidadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocalidadDto: UpdateLocalidadDto) {
    return this.localidadService.update(+id, updateLocalidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.localidadService.remove(+id);
  }
}
