export class FluxoModel {
  id?: string;
  projetoId?: string;
  nome?: string;
  status?: boolean;
  flowId?: string;
  zenviaId?: string;

  constructor(data: Data) {
    this.id = data?.id;
    this.projetoId = data?.projetoId;
    this.nome = data?.nome;
    this.status = data?.status ?? true;
    this.flowId = data?.flowId;
    this.zenviaId = data?.zenviaId;
  }
}

type Data = {
  id?: string;
  projetoId?: string;
  nome?: string;
  status?: boolean;
  flowId?: string;
  zenviaId?: string;
};
