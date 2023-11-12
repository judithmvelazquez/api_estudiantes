import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entties/estudiante.entity';
import { EstudianteController } from './controller/estudiante.controller';
import { EstudianteService } from './services/estudiante.service';
import { Asignatura } from 'src/asignatura/entities/asignatura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante, Asignatura,])],
  controllers: [EstudianteController, ],
  providers: [EstudianteService, ],
})
export class EstudianteModule {}