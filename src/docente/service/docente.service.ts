import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocenteDto } from '../dto/docente.dto';
import { Docente } from '../entities/docente.entity';

@Injectable()
export class DocenteService {
  constructor(
    @InjectRepository(Docente)
    private docenteRepo: Repository<Docente>,
  ) { }

  async create(createDocenteDto: CreateDocenteDto) {
    const docente = this.docenteRepo.create(createDocenteDto);
    await this.docenteRepo.save(docente);
    return docente;
  }

  findOne(id: number) {
    return this.docenteRepo.findOneBy({ id });
  }

  findAll() {
    return this.docenteRepo.find({
      order: { id: 'ASC' },
      relations:{clases:true}
    });
  }

  async remove(id: number) {
    const docente = await this.findOne(id);
    await this.docenteRepo.remove(docente);
    return 'Docente eliminado';
  }

  async update(id: number, cambios: CreateDocenteDto) {
    const oldDocente = await this.findOne(id);
    const updateDocente = await this.docenteRepo.merge(oldDocente, cambios);
    return this.docenteRepo.save(updateDocente);
  }
}