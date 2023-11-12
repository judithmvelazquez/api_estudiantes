import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { DocenteController } from './controller/docente.controller';
import { DocenteService } from './service/docente.service';

@Module({
    imports: [TypeOrmModule.forFeature([Docente,])],
    controllers: [DocenteController,],
    providers: [DocenteService,],
})
export class DocenteModule { }
