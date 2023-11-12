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
import { ClaseService } from '../service/clase.service';
import { CreateClaseDto } from '../dto/clase.dto';
  
  @Controller('clase')
  export class ClaseController {
    constructor(private readonly claseService: ClaseService) {}
    @Post()
    async create(@Body() createClaseDto: CreateClaseDto) {
      return this.claseService.create(createClaseDto);
    }
  
    @Get()
    findAll() {
      return this.claseService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.claseService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.claseService.remove(id);
    }
  
    @Patch(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() createClaseDto: CreateClaseDto,
    ) {
      return this.claseService.update(id, createClaseDto);
    }
  }