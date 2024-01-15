import {
  Column,
  CreateDateColumn,
  Entity,
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

  @Column({ nullable: true })
  urlBase: string;
  @Column({ nullable: true })
  urlContacts: string;
  @Column({ nullable: true })
  clientId: string;
  @Column({ unique: true, nullable: true })
  clienteSecret: string;
  @Column({ nullable: true })
  scope: string;
  @Column({ nullable: true })
  resource: string;
  @Column({ nullable: true })
  sql: string;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;
}
