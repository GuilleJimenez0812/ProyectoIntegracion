import { Column, Entity } from "typeorm";

@Entity()
class IngresosEgresos{
    @Column()
    id_transaccion: number

    @Column()
    tipo_transaccion: string

    @Column()
    cantidad: number

    @Column()
    descripcion: string
}