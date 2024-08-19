import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetodoPagoService } from './metodo-pago.service';
import { CreateMetodoPagoDto } from './dto/create-metodo-pago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodo-pago.dto';

@Controller('metodo-pago')
export class MetodoPagoController {
  constructor(private readonly metodoPagoService: MetodoPagoService) {}

  @Post()
  create(@Body() createMetodoPagoDto: CreateMetodoPagoDto) {
    return this.metodoPagoService.create(createMetodoPagoDto);
  }

  @Get()
  findAll() {
    return this.metodoPagoService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.metodoPagoService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateMetodoPagoDto: UpdateMetodoPagoDto) {
    return this.metodoPagoService.update(term, updateMetodoPagoDto);
  }

  @Delete(':term')
  delete(@Param('term') term: string) {
    return this.metodoPagoService.delete(term);
  }
}
