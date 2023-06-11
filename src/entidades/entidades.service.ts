import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';

import { Connection, Repository } from 'typeorm';
import { Sucursal } from './sucursal.entity';
import { modelo_vehiculo } from './modelo_vehiculos.entity';
import { metodo_pago } from './metodos_pago.entity';

@Injectable()
export class EntidadesService {
  constructor(
    @InjectRepository(Sucursal)
    private readonly SucursalRepository: Repository<Sucursal>,
  ) {}

  async getAll(): Promise<any> {
    const sucursal = await this.SucursalRepository.find();

    return {
      sucursal: sucursal,
    };
  }
}
