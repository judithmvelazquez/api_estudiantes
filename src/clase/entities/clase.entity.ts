import { Docente } from 'src/docente/entities/docente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Clase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  grado: string;

  @Column()
  docente_id: number;

  @ManyToOne(() => Docente, docente => docente.clases)
  @JoinColumn({ name: 'docente_id' })
  docente: Docente;
}