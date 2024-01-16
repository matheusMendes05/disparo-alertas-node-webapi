import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Campo } from './campo';

@Entity('valor')
export class Valor {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: true, unique: true })
  valor: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Campo, (campo) => campo.valor)
  campo: Campo;
}
