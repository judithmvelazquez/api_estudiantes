import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './entities/tarea.entity';
import { TareaController } from './controller/tarea.controller';
import { TareaService } from './service/tarea.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tarea,])],
    controllers: [TareaController,],
    providers: [TareaService,],
})
export class TareaModule { }
