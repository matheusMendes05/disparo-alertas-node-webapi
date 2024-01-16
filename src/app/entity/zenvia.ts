import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Fluxo } from './fluxo';

@Entity('zenvia')
export class Zenvia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: true })
  urlBase: string;
  @Column({ unique: true, nullable: true })
  xApiToken: string;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;

  @OneToMany(() => Fluxo, (fluxo) => fluxo.zenvia)
  fluxo: Zenvia;
}
