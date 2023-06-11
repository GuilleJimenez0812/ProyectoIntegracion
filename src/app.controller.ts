import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EntidadesService } from './entidades/entidades.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('obtener-datos-equipo_3')
  ObtenerData() {
    return this.appService.getAll();
  }
}
