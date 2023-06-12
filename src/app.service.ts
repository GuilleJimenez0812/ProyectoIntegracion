import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';

import { Sucursal } from './entidades/sucursal.entity';
import { Repository } from 'typeorm/repository/Repository';
import { metodo_pago } from './entidades/metodos_pago.entity';
import { modelo_vehiculo } from './entidades/modelo_vehiculos.entity';
import { HechosAlquiler } from './entidades/hechos-alquiler.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Sucursal)
    private readonly SucursalRepository: Repository<Sucursal>,
    @InjectRepository(metodo_pago)
    private readonly metodo_pagoRepository: Repository<metodo_pago>,
    @InjectRepository(modelo_vehiculo)
    private readonly modelo_vehiculoRepository: Repository<modelo_vehiculo>,
    @InjectRepository(HechosAlquiler)
    private readonly hechosRepository: Repository<HechosAlquiler>,
  ) {}

  async getAll(): Promise<any> {
    const sucursal = await this.SucursalRepository.find();
    const metodo_pago = await this.metodo_pagoRepository.find();
    const modelo_vehiculo = await this.modelo_vehiculoRepository.find();
    const hechos = await this.hechosRepository.find();

    return {
      sucursal: sucursal[0],
      metodo_Pagos: metodo_pago,
      modelo_Vehiculos: modelo_vehiculo,
      estadisticas_sucursal: hechos.map((value) => {
        return {
          tiempo: {
            id_anio: value.fecha.getFullYear(),
            id_mes: value.fecha.getMonth(),
            id_dia: value.fecha.getDay(),
            id_hora: value.fecha.getHours(),
          },
          porc_Satisfaccion_Cliente: value.porc_satisfaccion_cliente,
          id_metodo_pago: value.id_metodo_pago,
          posicion_top_metodo_pago_utilizado:
            value.posicion_top_metodo_pago_utilizado,
          metodo_pago_veces_utilizado: value.metodo_pago_veces_utilizado,
          porcentaje_utilizacion_metodo_pago:
            value.porcentaje_utilizacion_metodo_pago,
          id_modelo_vehiculo: value.id_modelo_vehiculo,
          posicion_top_modelo_vehiculo_alquilado:
            value.posicion_top_modelo_vehiculo_alquilado,
          modelo_veces_alquilado: value.modelo_veces_alquilado,
          modelo_porcentaje_alquilado: value.modelo_porcentaje_alquilado,
          ingresos: value.ingresos,
          egresos: value.egresos,
          porc_ingresos: value.ingresos,
          porc_egresos: value.porc_egresos,
          ganancia_neta: value.ganancia_neta,
          porc_vehiculos_disponibles: 45,
          duracion_promedio_alquiler: value.duracion_promedio_alquiler,
          total_alquileres: value.total_alquileres,
          porc_vehiculos_utilizados: 60,
        };
      }),
    };
  }
}
