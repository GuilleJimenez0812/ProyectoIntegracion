import { Column, Entity } from "typeorm";

@Entity()
class Sucursal {
    @Column()
    id_sucursal: number

    @Column()
    nombre_sucursal: string

    @Column()
    ciudad: string

    @Column()
    pais: string
}