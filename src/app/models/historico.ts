export class HistoricoModel {
  id?: string;
  dataDisparo: Date;
  qtdUsuarios: number;
  status?: boolean;
  projetoId: string;

  constructor(data: Data) {
    this.id = data.id;
    this.dataDisparo = data.dataDisparo;
    this.qtdUsuarios = data.qtdUsuarios;
    this.status = data.status ?? true;
    this.projetoId = data.projetoId;
  }
}

type Data = {
  id?: string;
  dataDisparo: Date;
  qtdUsuarios: number;
  status: boolean;
  projetoId: string;
};
