export class ValorModel {
  id?: string;
  valor: string;
  campoId: string;

  constructor(data: Data) {
    this.id = data.id;
    this.valor = data.valor;
    this.campoId = data.campoId;
  }
}

type Data = {
  id?: string;
  valor: string;
  campoId: string;
};
