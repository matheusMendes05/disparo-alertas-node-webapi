export class ZenviaModel {
  id?: string;
  urlBase: string;
  xApiToken?: string;
  constructor(data: Data) {
    this.id = data.id;
    this.urlBase = data.urlBase;
    this.xApiToken = data.xApiToken;
  }
}

type Data = {
  id?: string;
  urlBase?: string;
  xApiToken?: string;
};
