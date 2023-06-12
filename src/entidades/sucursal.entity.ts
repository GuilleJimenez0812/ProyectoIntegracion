import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sucursal {
  @PrimaryGeneratedColumn()
  id_sucursal: number;

  @Column()
  nombre: string;

  @Column()
  ubicacion: string;

  @Column()
  longitud: number;

  @Column()
  latitud: number;

  @Column({ type: 'timestamp' })
  fecha_carga: Date;
}
