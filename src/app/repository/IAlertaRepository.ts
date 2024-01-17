import { Campo } from '../entity/campo';
import { Cliente } from '../entity/cliente';
import { Dynamics } from '../entity/dynamics';
import { Fluxo } from '../entity/fluxo';
import { Formulario } from '../entity/formulario';
import { Historico } from '../entity/historico';
import { Valor } from '../entity/valor';
import { Zenvia } from '../entity/zenvia';

export interface IAlertaRepository {
  // junção de todas as tabelas por cliente e projeto
  getInfo(params: IAlertaRepository.Params): Promise<IAlertaRepository.Result>;
}

export namespace IAlertaRepository {
  export type Params = {
    clienteId: string;
    projetoId: string;
  };

  export type Result = Cliente[] | undefined;
}
