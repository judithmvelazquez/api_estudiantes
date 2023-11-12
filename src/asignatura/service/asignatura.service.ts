import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAsignaturaDto } from '../dto/asignatura.dto';
import { Asignatura } from '../entities/asignatura.entity';

@Injectable()
export class AsignaturaService {
  constructor(
    @InjectRepository(Asignatura)
    private asignaturaRepo: Repository<Asignatura>,
  ) { }

  async create(createAsignaturaDto: CreateAsignaturaDto) {
    const asignatura = this.asignaturaRepo.create(createAsignaturaDto);
    await this.asignaturaRepo.save(asignatura);
    return asignatura;
  }

  async findOne(id: number) {
    return this.asignaturaRepo.findOne({
      where: { id }
    });
  }

  async findAll() {
    return this.asignaturaRepo.find({
      order: { id: 'ASC' }
    });
  }

  async remove(id: number) {
    const asignatura = await this.findOne(id);
    await this.asignaturaRepo.remove(asignatura);
    return 'Asignatura eliminada';
  }

  async update(id: number, cambios: CreateAsignaturaDto) {
    const oldAsignatura = await this.findOne(id);
    const updatedAsignatura = await this.asignaturaRepo.merge(
      oldAsignatura,
      cambios,
    );
    return this.asignaturaRepo.save(updatedAsignatura);
  }
}