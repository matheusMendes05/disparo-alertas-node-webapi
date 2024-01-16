export class AlertaModel {
  urlBase: string;
  xApiToken: string;
  flowId: string;
  name: string;
  filds: string[];
  fildsName: string[];

  constructor(data: Data) {
    this.urlBase = data.urlBase;
    this.xApiToken = data.xApiToken;
    this.flowId = data.flowId;
    this.name = data.name;
    this.filds = data.filds;
    this.fildsName = data.fildsName;
  }
}

type Data = {
  urlBase: string;
  xApiToken: string;
  flowId: string;
  name: string;
  filds: string[];
  fildsName: string[];
};
