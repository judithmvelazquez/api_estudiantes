import { Clase } from 'src/clase/entities/clase.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Docente {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  correo: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  materia: string;

  @OneToMany(() => Clase, clase => clase.docente)
  clases: Clase[];
}