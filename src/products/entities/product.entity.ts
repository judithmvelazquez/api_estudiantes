import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';
import { ProductImage } from './product-image.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'int4', nullable: false })
  price: number;

  @Column({ type: 'int8', nullable: false })
  stock: number;

  @Column({ type: 'int4', nullable: false })
  user_id: number;

  @Column({ type: 'varchar', nullable: true })
  filename: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  //Relaciones
  @ManyToOne(() => User)
  @JoinColumn({
    name: 'user_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id', //este es el id del usuario
  })
  autor: User;

  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
  })
  images?: ProductImage[];
}
