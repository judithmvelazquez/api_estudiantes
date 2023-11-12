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
import { AsignaturaService } from '../service/asignatura.service';
import { CreateAsignaturaDto } from '../dto/asignatura.dto';
  
  @Controller('asignatura')
  export class AsignaturaController {
    constructor(private readonly asignaturaService: AsignaturaService) {}
    @Post()
    async create(@Body() createAsignaturaDto: CreateAsignaturaDto) {
      return this.asignaturaService.create(createAsignaturaDto);
    }
  
    @Get()
    findAll() {
      return this.asignaturaService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.asignaturaService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.asignaturaService.remove(id);
    }
  
    @Patch(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() createAsignaturaDto: CreateAsignaturaDto,
    ) {
      return this.asignaturaService.update(id, createAsignaturaDto);
    }
  }
  