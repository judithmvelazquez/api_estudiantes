import { IsNotEmpty, IsString, IsEmail, MaxLength, IsArray, IsOptional } from 'class-validator';
import { Estudiante } from 'src/estudiante/entties/estudiante.entity';

export class CreateAsignaturaDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  grado: string;
}
