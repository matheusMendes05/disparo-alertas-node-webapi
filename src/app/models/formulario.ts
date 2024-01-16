export class FormularioModel {
  id?: string;
  titulo: string;
  projetoId: string;

  constructor(data: Data) {
    this.id = data.id;
    this.titulo = data.titulo;
    this.projetoId = data.projetoId;
  }
}

type Data = {
  id?: string;
  titulo: string;
  projetoId: string;
};
