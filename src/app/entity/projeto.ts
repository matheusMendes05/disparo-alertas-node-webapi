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

  @OneToMany(() => Dynamics, (dynamics) => dynamics.projeto)
  dynamics: Dynamics;
}