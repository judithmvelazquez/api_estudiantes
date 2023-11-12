import { IsNotEmpty, IsString, MaxLength, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateTareaDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  descripcion: string;

  @IsNotEmpty()
  @IsDateString()
  fecha_entrega: Date;

  @IsOptional()
  @IsNumber()
  estudiante_id: number;
}