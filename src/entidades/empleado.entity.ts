import { Column, Entity } from "typeorm";

@Entity()
class Empleado {
    @Column()
    id_empleado: number

    @Column()
    nombre_empleado: string

    @Column()
    cargo: string

    @Column()
    fecha_contratacion: Date

    @Column()
    salario: number
    
    @Column()
    horas_trabajadas: number
}