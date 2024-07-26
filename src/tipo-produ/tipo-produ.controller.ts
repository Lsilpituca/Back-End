import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { TipoProduService } from './tipo-produ.service';
import { CreateTipoProduDto } from './dto/create-tipo-produ.dto';
import { UpdateTipoProduDto } from './dto/update-tipo-produ.dto';

@Controller('tipo-produ')
export class TipoProduController {
  constructor(private readonly tipoProduService: TipoProduService) {}

  @Post()
  create(@Body() createTipoProduDto: CreateTipoProduDto) {
    return this.tipoProduService.create(createTipoProduDto);
  }

  @Get()
  findAll() {
    return this.tipoProduService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.tipoProduService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateTipoProduDto:UpdateTipoProduDto) {
    return this.tipoProduService.update(term, updateTipoProduDto);
  }

  @Delete(':term')
  delete(@Param('term') term: string) {
    return this.tipoProduService.delete(term);
  }
  }

