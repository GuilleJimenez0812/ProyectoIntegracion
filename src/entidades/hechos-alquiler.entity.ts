import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HechosAlquiler {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  porc_satisfaccion_cliente: number;

  @Column()
  id_metodo_pago: number;

  @Column()
  posicion_top_metodo_pago_utilizado: number;

  @Column()
  metodo_pago_veces_utilizado: number;

  @Column()
  porcentaje_utilizacion_metodo_pago: number;

  @Column()
  posicion_top_modelo_vehiculo_alquilado: number;

  @Column()
  id_modelo_vehiculo: number;

  @Column()
  modelo_veces_alquilado: number;

  @Column()
  modelo_porcentaje_alquilado: number;

  @Column()
  ingresos: number;

  @Column()
  egresos: number;

  @Column()
  porc_ingresos: number;

  @Column()
  porc_egresos: number;

  @Column()
  ganancia_neta: number;

  @Column()
  duracion_promedio_alquiler: number;

  @Column()
  total_alquileres: number;
}
