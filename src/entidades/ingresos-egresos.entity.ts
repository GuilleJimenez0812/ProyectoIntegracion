/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class IngresosEgresos{
    @PrimaryGeneratedColumn()
    id_transaccion: number

    @Column()
    tipo_transaccion: string

    @Column()
    cantidad: number

    @Column()
    descripcion: string
}