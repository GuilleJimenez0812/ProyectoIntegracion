import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class metodo_pago {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  fecha_carga: Timestamp;
}
