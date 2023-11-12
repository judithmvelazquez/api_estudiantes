import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from './entities/clase.entity';
import { ClaseController } from './controller/clase.controller';
import { ClaseService } from './service/clase.service';

@Module({
    imports: [TypeOrmModule.forFeature([Clase,])],
    controllers: [ClaseController,],
    providers: [ClaseService,],
})

export class ClaseModule { }