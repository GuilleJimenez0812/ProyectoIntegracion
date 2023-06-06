import { Column, Entity } from "typeorm";

@Entity()
class Vehiculo {
    @Column()
    id_vehiculo: number

    @Column()
    marca: string
    
    @Column()
    modelo: string

    @Column()
    anio: string

    @Column()
    tipo_vehiculo: string

    @Column()
    caracteristicas: string

    @Column()
    estado_vehiculo: string

    @Column()
    precio_alquiler_por_dia: number
}