import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';

import { Connection, Repository } from 'typeorm';
import { Sucursal } from './sucursal.entity';
import { modelo_vehiculo } from './modelo_vehiculos.entity';
import { metodo_pago } from './metodos_pago';

@Injectable()
export class EntidadesService {
  constructor(
    @InjectConnection() private readonly connection: Connection,
    @InjectRepository(Sucursal)
    private readonly SucursalRepository: Repository<Sucursal>,
    @InjectRepository(modelo_vehiculo)
    private readonly modelo_vehiculoRepository: Repository<modelo_vehiculo>,
    @InjectRepository(metodo_pago)
    private readonly metodo_pagoRepository: Repository<metodo_pago>,
  ) {}

  async getAll(): Promise<any> {
    const sucursal = await this.SucursalRepository.find();
    const modelo_vehiculo = await this.modelo_vehiculoRepository.find();
    const metodo_pago = await this.metodo_pagoRepository.find();

    return {
      sucursal: sucursal,
      modelo_vehiculo: modelo_vehiculo,
      metodo_pago: metodo_pago,
    };
  }
}
