import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';

@Controller('provincia')
export class ProvinciaController {
  constructor(private readonly provinciaService: ProvinciaService) {}

  @Post()
  create(@Body() createProvinciaDto: CreateProvinciaDto) {
    return this.provinciaService.create(createProvinciaDto);
  }

  @Get()
  findAll() {
    return this.provinciaService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.provinciaService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateProvinciaDto: UpdateProvinciaDto) {
    return this.provinciaService.update(term, updateProvinciaDto);
  }

  @Delete(':term')
  delete(@Param('term') term: string) {
    return this.provinciaService.delete(term);
  }
}
