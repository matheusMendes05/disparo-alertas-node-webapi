export class DynamicsModel {
  id?: string;
  urlBase?: string;
  urlContacts?: string;
  clientId?: string;
  clienteSecret?: string;
  scope?: string;
  resource?: string;
  sql?: string;

  constructor(data: Data) {
    this.id = data?.id;
    this.urlBase = data?.urlBase;
    this.urlContacts = data?.urlContacts;
    this.clientId = data?.clientId;
    this.clienteSecret = data?.clienteSecret;
    this.scope = data?.scope;
    this.resource = data?.resource;
    this.sql = data?.sql;
  }
}

type Data = {
  id?: string;
  urlBase?: string;
  urlContacts?: string;
  clientId?: string;
  clienteSecret?: string;
  scope?: string;
  resource?: string;
  sql?: string;
};
