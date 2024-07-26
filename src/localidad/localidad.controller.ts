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

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.localidadService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateLocalidadDto:UpdateLocalidadDto) {
    return this.localidadService.update(term, updateLocalidadDto);
  }

  @Delete(':term')
  delete(@Param('term') term: string) {
    return this.localidadService.delete(term);
  }
}
