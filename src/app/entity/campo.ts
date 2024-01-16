import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Formulario } from './formulario';
import { Valor } from './valor';

@Entity('campo')
export class Campo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, unique: true })
  nome: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Formulario, (formulario) => formulario.campo)
  formulario: Formulario;

  @OneToMany(() => Valor, (valor) => valor.campo)
  valor: Valor;
}
