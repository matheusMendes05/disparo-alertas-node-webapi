import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Projeto } from '../entity/projeto';
import { Zenvia } from '../entity/zenvia';

@Entity('fluxo')
export class Fluxo {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: true })
  nome: string;

  @Column()
  status: boolean;

  @Column({ unique: true, nullable: true })
  flowId: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Projeto, (projeto) => projeto.fluxo)
  projeto: Projeto;

  @ManyToOne(() => Zenvia, (zenvia) => zenvia.fluxo)
  zenvia: Zenvia;
}
