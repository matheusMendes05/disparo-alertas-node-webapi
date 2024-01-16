import { IZenviaService } from '../IZenviaService';

export class ZenviaService implements IZenviaService {
  send(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
