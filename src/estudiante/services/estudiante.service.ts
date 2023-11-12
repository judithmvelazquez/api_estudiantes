import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstudianteDto } from '../dto/estudiante.dto';
import { Estudiante } from '../entties/estudiante.entity';
import { Asignatura } from 'src/asignatura/entities/asignatura.entity';


@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepo: Repository<Estudiante>,
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto) {
    const estudiante = await this.estudianteRepo.create(createEstudianteDto)
    await this.estudianteRepo.save(estudiante)
    return estudiante;
  }

  findOne(id: number) {
    return this.estudianteRepo.findOne({where:{id},  relations: ['user', 'tareas'] });
  }

  findAll() {
    return this.estudianteRepo.find({
      relations:{user:true, tareas:true, asignatura:true}
    });
  }

  async remove(id: number) {
    const estudiante = await this.findOne(id);
    await this.estudianteRepo.remove(estudiante);
    return 'Estudiante  eliminado';
  }

  async update(id: number, cambios: CreateEstudianteDto) {
    return "aqui elimino"
  }
}