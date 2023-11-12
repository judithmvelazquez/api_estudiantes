import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
  } from '@nestjs/common';
import { EstudianteService } from '../services/estudiante.service';
import { CreateEstudianteDto } from '../dto/estudiante.dto';
  
  
  @Controller('estudiante')
  export class EstudianteController {
    constructor(private readonly estudianteService: EstudianteService) {}
    @Post()
    async create(@Body() createEstudianteDto: CreateEstudianteDto) {
      return this.estudianteService.create(createEstudianteDto);
    }
  
    @Get()
    findAll() {
      return this.estudianteService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.estudianteService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.estudianteService.remove(id);
    }
  
    @Patch(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() createEstudianteDto: CreateEstudianteDto,
    ) {
      return this.estudianteService.update(id, createEstudianteDto);
    }
  }
  