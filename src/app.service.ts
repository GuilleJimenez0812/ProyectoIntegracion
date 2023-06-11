import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';

import { Sucursal } from './entidades/sucursal.entity';
import { Repository } from 'typeorm/repository/Repository';
import { metodo_pago } from './entidades/metodos_pago.entity';
import { modelo_vehiculo } from './entidades/modelo_vehiculos.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Sucursal)
    private readonly SucursalRepository: Repository<Sucursal>,
    @InjectRepository(metodo_pago)
    private readonly metodo_pagoRepository: Repository<metodo_pago>,
    @InjectRepository(modelo_vehiculo)
    private readonly modelo_vehiculoRepository: Repository<modelo_vehiculo>,
  ) {}

  async getAll(): Promise<any> {
    const sucursal = await this.SucursalRepository.find();

    return {
      sucursal: sucursal,
    };
  }
}
