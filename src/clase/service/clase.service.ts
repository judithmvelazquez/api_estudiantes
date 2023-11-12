import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clase } from '../entities/clase.entity';
import { CreateClaseDto } from '../dto/clase.dto';

@Injectable()
export class ClaseService {
  constructor(
    @InjectRepository(Clase)
    private claseRepo: Repository<Clase>,
  ) {}

  async create(createDocenteDto: CreateClaseDto) {
    const clase = this.claseRepo.create(createDocenteDto);
    await this.claseRepo.save(clase);
    return clase;
  }

  findOne(id: number) {
    return this.claseRepo.findOneBy({ id });
  }

  findAll() {
    return this.claseRepo.find({
      order: { id: 'ASC' },
      relations:{docente:true}
    });
  }

  async remove(id: number) {
    const clase = await this.findOne(id);
    await this.claseRepo.remove(clase);
    return 'Clase eliminada';
  }

  async update(id: number, cambios: CreateClaseDto) {
    const oldClase = await this.findOne(id);
    const updateClase = await this.claseRepo.merge(oldClase, cambios);
    return this.claseRepo.save(updateClase);
  }
}