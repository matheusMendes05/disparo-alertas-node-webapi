export class ClienteModel {
  nome: string;
  status?: boolean;
  constructor(data: Data) {
    this.nome = data.nome;
    this.status = data.status ?? true;
  }
}

type Data = {
  nome: string;
  status?: boolean;
};
