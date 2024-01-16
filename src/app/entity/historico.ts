import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Projeto } from './projeto';

@Entity('Historico')
export class Historico {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: true })
  dataDisparo: Date;
  @Column()
  qtdUsuarios: number;
  @Column()
  status: boolean;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Projeto, (projeto) => projeto.historico)
  projeto: Projeto[];
}
