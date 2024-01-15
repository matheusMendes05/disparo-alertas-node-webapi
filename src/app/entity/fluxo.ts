import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Projeto } from '../entity/projeto';

@Entity('fluxo')
export class Fluxo {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: true })
  nome: string;

  @Column()
  status: boolean;

  @Column({ unique: true, nullable: true })
  chave: string;

  @Column({ unique: true, nullable: true })
  valor: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Projeto, (projeto) => projeto.fluxo)
  projeto: Projeto;
}
