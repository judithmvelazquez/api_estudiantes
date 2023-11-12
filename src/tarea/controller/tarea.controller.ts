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
import { TareaService } from '../service/tarea.service';
import { CreateTareaDto } from '../dto/tarea.dto';

@Controller('tarea')
export class TareaController {
    constructor(private readonly tareaService: TareaService) { }
    @Post()
    async create(@Body() createTareaDto: CreateTareaDto) {
        return this.tareaService.create(createTareaDto);
    }

    @Get()
    findAll() {
        return this.tareaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.tareaService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.tareaService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() createTareaDto: CreateTareaDto,
    ) {
        return this.tareaService.update(id, createTareaDto);
    }
}
