import { Cliente } from '../entity/cliente';

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
