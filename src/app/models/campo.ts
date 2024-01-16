export class CampoModel {
  id?: string;
  nome: string;
  formularioId: string;

  constructor(data: Data) {
    this.id = data.id;
    this.nome = data.nome;
    this.formularioId = data.formularioId;
  }
}

type Data = {
  id?: string;
  nome: string;
  formularioId: string;
};
