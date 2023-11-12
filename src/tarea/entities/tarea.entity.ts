import { Estudiante } from 'src/estudiante/entties/estudiante.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200, nullable: false })
  descripcion: string;

  @Column({ type: 'date', nullable: false })
  fecha_entrega: Date;

  @Column({ type: 'int', nullable: false })
  estudiante_id: number;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.tareas)
  @JoinColumn({ name: 'estudiante_id' })
  estudiante: Estudiante;
}