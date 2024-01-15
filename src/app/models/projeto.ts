export class ProjetoModel {
  id?: string;
  clienteId?: string;
  dynamicsId?: string;
  nome: string;
  status?: boolean;
  constructor(data: Data) {
    this.id = data.id;
    this.clienteId = data.clienteId;
    this.nome = data.nome;
    this.status = data.status ?? true;
  }
}

type Data = {
  id?: string;
  clienteId?: string;
  dynamicsId?: string;
  nome: string;
  status?: boolean;
};
