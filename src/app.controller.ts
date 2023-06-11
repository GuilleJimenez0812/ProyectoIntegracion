import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EntidadesService } from './entidades/entidades.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly entidadservice: EntidadesService,
  ) {}

  @Get()
  ObtenerData() {
    return this.entidadservice.getAll();
  }
}
