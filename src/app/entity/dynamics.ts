import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Projeto } from './projeto';

@Entity('dynamics')
export class Dynamics {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Projeto, (projeto) => projeto.dynamics)
  projeto: Projeto[];

  @Column({ unique: true, nullable: true })
  urlBase: string;
  @Column({ unique: true, nullable: true })
  urlContacts: string;
  @Column({ unique: true, nullable: true })
  clientId: string;
  @Column({ unique: true, nullable: true })
  clienteSecret: string;
  @Column({ unique: true, nullable: true })
  scope: string;
  @Column({ unique: true, nullable: true })
  resource: string;
  @Column({ unique: true, nullable: true })
  sql: string;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;
}
