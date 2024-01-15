export class FluxoModel {
  id?: string;
  projetoId?: string;
  nome?: string;
  status?: boolean;
  chave?: string;
  valor?: string;

  constructor(data: Data) {
    this.id = data?.id;
    this.projetoId = data?.projetoId;
    this.nome = data?.nome;
    this.status = data?.status ?? true;
    this.chave = data?.chave;
    this.valor = data?.valor;
  }
}

type Data = {
  id?: string;
  projetoId?: string;
  nome?: string;
  status?: boolean;
  chave?: string;
  valor?: string;
};
