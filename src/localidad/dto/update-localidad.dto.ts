import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalidadDto } from './create-localidad.dto';

export class UpdateLocalidadDto extends PartialType(CreateLocalidadDto) {}
