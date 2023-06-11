import { Column, Entity, Timestamp } from 'typeorm';

@Entity()
class Sucursal {
  @Column()
  id_sucursal: number;

  @Column()
  nombre_sucursal: string;

  @Column()
  ubicacion: string;

  @Column()
  longitud: number;

  @Column()
  latitud: number;

  @Column()
  fecha_carga: Timestamp;
}
