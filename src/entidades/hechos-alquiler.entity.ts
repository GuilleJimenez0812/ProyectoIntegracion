import { Column, Entity } from "typeorm"

@Entity()
class HechosAlquiler {

    @Column()
    id_alquiler: number

    @Column()
    fecha_alquiler: Date

    @Column()
    ID_Transaccion: number

    @Column()
    fecha_devolucion: Date

    @Column()
    id_vhiculo: number

    @Column()
    id_cliente: number

    @Column()
    id_empleado: number

    @Column()
    id_sucursal: number

    @Column()
    dias_alquiler: string

    @Column()
    monto_pagado: number

    @Column()
    fecha: Date

    @Column()
    top_10_pos_1: string

    @Column()
    top_10_pos_2: string

    @Column()
    top_10_pos_3: string

    @Column()
    top_10_pos_4: string

    @Column()
    top_10_pos_5: string

    @Column()
    top_10_pos_6: string

    @Column()
    top_10_pos_7: string

    @Column()
    top_10_pos_8: string

    @Column()
    top_10_pos_9: string

    @Column()
    top_10_pos_10: string

    @Column()
    porcentaje_ingreso: number

    @Column()
    porcentaje_egreso: number
}