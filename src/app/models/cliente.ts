export class ClienteModel {
  id?: string;
  nome: string;
  status?: boolean;
  constructor(data: Data) {
    this.id = data.id;
    this.nome = data.nome;
    this.status = data.status ?? true;
  }
}

type Data = {
  id?: string;
  nome: string;
  status?: boolean;
};
