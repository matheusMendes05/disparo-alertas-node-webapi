import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Projeto } from './projeto';
import { Campo } from './campo';

@Entity('formulario')
export class Formulario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Projeto, (projeto) => projeto.formulario)
  projeto: Projeto;

  @OneToMany(() => Campo, (campo) => campo.formulario)
  campo: Campo[];
}
