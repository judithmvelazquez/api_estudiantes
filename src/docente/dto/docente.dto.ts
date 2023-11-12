import { IsNotEmpty, IsString, IsEmail, MaxLength } from 'class-validator';

export class CreateDocenteDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @IsString()
  materia: string;
}