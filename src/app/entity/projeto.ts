import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cliente } from './cliente';
import { Dynamics } from './dynamics';
import { Fluxo } from './fluxo';
import { Historico } from './historico';

@Entity('projeto')
export class Projeto {
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

  @ManyToOne(() => Cliente, (cliente) => cliente.projeto)
  cliente: Cliente;

  @ManyToOne(() => Dynamics, (dynamics) => dynamics.projeto, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  dynamics: Dynamics;

  @OneToMany(() => Fluxo, (fluxo) => fluxo.projeto)
  fluxo: Fluxo[];

  @OneToMany(() => Historico, (historico) => historico.projeto)
  historico: Historico[];
}
