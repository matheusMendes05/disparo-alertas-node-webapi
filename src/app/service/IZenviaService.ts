import { AlertaModel } from '../models/alerta';

export interface IZenviaService {
  send(params: AlertaModel): Promise<Result>;
}

type Result = {
  statusCode: number;
  statusText: string;
};
