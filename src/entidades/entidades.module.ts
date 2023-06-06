import { Module } from '@nestjs/common';
import { EntidadesController } from './entidades.controller';
import { EntidadesService } from './entidades.service';

@Module({
  controllers: [EntidadesController],
  providers: [EntidadesService]
})
export class EntidadesModule {}
