import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndicadoresModule } from './indicadores/indicadores.module';
import { EntidadesModule } from './entidades/entidades.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [__dirname + '/**/**.entity{.ts,.js}'],
    synchronize: true
  }), 
    IndicadoresModule, EntidadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
