import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from '../entities/tarea.entity';
import { CreateTareaDto } from '../dto/tarea.dto';

@Injectable()
export class TareaService {
    constructor(
        @InjectRepository(Tarea)
        private tareaRepo: Repository<Tarea>,
    ) { }

    async create(createTareaDto: CreateTareaDto) {
        const tarea = this.tareaRepo.create(createTareaDto);
        await this.tareaRepo.save(tarea);
        return tarea;
    }

    findOne(id: number) {
        return this.tareaRepo.findOneBy({ id });
    }

    findAll() {
        return this.tareaRepo.find({
            order: { id: 'ASC' },
            relations:{estudiante: true}
        });
    }

    async remove(id: number) {
        const tarea = await this.findOne(id);
        await this.tareaRepo.remove(tarea);
        return 'Tarea eliminada';
    }

    async update(id: number, cambios: CreateTareaDto) {
        const oldClase = await this.findOne(id);
        const updateClase = await this.tareaRepo.merge(oldClase, cambios);
        return this.tareaRepo.save(updateClase);
    }
}