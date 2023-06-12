import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndicadoresModule } from './indicadores/indicadores.module';
import { EntidadesModule } from './entidades/entidades.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntidadesService } from './entidades/entidades.service';
import { EntidadesController } from './entidades/entidades.controller';
import { metodo_pago } from './entidades/metodos_pago.entity';
import { modelo_vehiculo } from './entidades/modelo_vehiculos.entity';
import { Sucursal } from './entidades/sucursal.entity';
import { HechosAlquiler } from './entidades/hechos-alquiler.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      metodo_pago,
      modelo_vehiculo,
      Sucursal,
      HechosAlquiler,
    ]),
    //postgres://proyecto_electiva_user:IONnFYW7BUsjg36cmq7YqZsAdR4LPxVO@dpg-ci34c9bhp8u1a1dvnk30-a.oregon-postgres.render.com/proyecto_electiva
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-ci34c9bhp8u1a1dvnk30-a.oregon-postgres.render.com',
      port: 5432,
      username: 'proyecto_electiva_user',
      password: 'IONnFYW7BUsjg36cmq7YqZsAdR4LPxVO',
      database: 'proyecto_electiva',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/*{.ts,.js}'],
      synchronize: true,
      ssl: true,
    }),
    IndicadoresModule,
    EntidadesModule,
  ],
  controllers: [AppController, EntidadesController],
  providers: [AppService, EntidadesService],
})
export class AppModule {}
