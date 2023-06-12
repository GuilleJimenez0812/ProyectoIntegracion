import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class metodo_pago {
  @PrimaryGeneratedColumn()
  id_metodo: number;
  @Column()
  nombre: string;
  @Column({ type: 'timestamp' })
  fecha_carga: Date;
}
