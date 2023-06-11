import { Module } from '@nestjs/common';
import { EntidadesController } from './entidades.controller';
import { EntidadesService } from './entidades.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sucursal } from './sucursal.entity';
import { metodo_pago } from './metodos_pago.entity';
import { modelo_vehiculo } from './modelo_vehiculos.entity';

@Module({
  controllers: [EntidadesController],
  providers: [EntidadesService],
  imports: [
    TypeOrmModule,
    TypeOrmModule.forFeature([metodo_pago, modelo_vehiculo, Sucursal]),
  ],
})
export class EntidadesModule {}
