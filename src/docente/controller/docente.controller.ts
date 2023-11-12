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
import { DocenteService } from '../service/docente.service';
import { CreateDocenteDto } from '../dto/docente.dto';
  
  @Controller('docente')
  export class DocenteController {
    constructor(private readonly docenteService: DocenteService) {}
    @Post()
    async create(@Body() createDocenteDto: CreateDocenteDto) {
      return this.docenteService.create(createDocenteDto);
    }
  
    @Get()
    findAll() {
      return this.docenteService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.docenteService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.docenteService.remove(id);
    }
  
    @Patch(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() createDocenteDto: CreateDocenteDto,
    ) {
      return this.docenteService.update(id, createDocenteDto);
    }
  }
  