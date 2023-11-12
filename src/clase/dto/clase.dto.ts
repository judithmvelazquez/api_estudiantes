import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, } from 'class-validator';

export class CreateClaseDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  grado: string;

  @IsNumber()
  @IsOptional()
  docente_id: number
}