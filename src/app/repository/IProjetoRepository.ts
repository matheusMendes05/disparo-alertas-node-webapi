import { Campo } from '../entity/campo';
import { Cliente } from '../entity/cliente';
import { Dynamics } from '../entity/dynamics';
import { Fluxo } from '../entity/fluxo';
import { Formulario } from '../entity/formulario';
import { Historico } from '../entity/historico';
import { Projeto } from '../entity/projeto';
import { Valor } from '../entity/valor';
import { Zenvia } from '../entity/zenvia';
import { ProjetoModel } from '../models/projeto';

export interface IProjetoRepository {
  get(id: string): Promise<Projeto>;
  list(): Promise<Projeto[]>;
  save(model: ProjetoModel): Promise<Projeto>;
  update(model: ProjetoModel): Promise<Projeto>;
  delete(id: string): Promise<void>;
  // add
  listProjectbyClient(params: IProjetoRepository.Params): Promise<any>;
}

export namespace IProjetoRepository {
  export type Params = {
    clienteId: string;
    projetoId: string;
  };

  export type Result = {
    id: string;
    nome: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    cliente: Cliente[];
    dynamics: Dynamics;
    historico: Historico[];
    formulario: Formulario;
    fluxo: Fluxo[];
    zenvia: Zenvia;
    campo: Campo[];
    valor: Valor[];
  };
}
