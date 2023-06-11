import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
@Entity()
export class modelo_vehiculo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre_modelo: string;
  @Column()
  marca: string;
  @Column()
  anio_fabricacion: number;
  @Column()
  fecha_carga: Timestamp;
}
