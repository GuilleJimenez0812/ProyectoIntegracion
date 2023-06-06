import { Column, Entity } from "typeorm";

@Entity()
class Cliente {

    @Column()
    id_cliente: number

    @Column()
    nombre_cliente: string

    @Column()
    direccion_cliente: string

    @Column()
    numero_telefono: string

    @Column()
    correo_electronico: string

    @Column()
    numero_licencia: number

    @Column()
    fecha_naciiento: Date
}