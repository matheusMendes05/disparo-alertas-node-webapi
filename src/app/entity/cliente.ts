import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Projeto } from './projeto';

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @OneToMany(() => Projeto, (projeto) => projeto.cliente, {
    eager: true,
  })
  projeto: Projeto[];
}
