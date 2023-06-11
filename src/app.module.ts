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

@Module({
  imports: [
    TypeOrmModule.forFeature([metodo_pago, modelo_vehiculo, Sucursal]),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'proyecto_electiva',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/*{.ts,.js}'],
      synchronize: true,
    }),
    IndicadoresModule,
    EntidadesModule,
  ],
  controllers: [AppController, EntidadesController],
  providers: [AppService, EntidadesService],
})
export class AppModule {}
