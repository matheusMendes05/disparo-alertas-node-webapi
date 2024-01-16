import { IZenviaRepository } from '../../../repository/IZenviaRepository';
import { ZenviaModel } from '../../../models/zenvia';
import { Zenvia } from '../../../entity/zenvia';
import { ICrypter } from '../../encrypter';

export class CreateZenviaUseCase {
  constructor(
    private readonly crypter: ICrypter,
    private readonly zenviaRepo: IZenviaRepository,
  ) {}
  async execute(params: Params): Promise<Zenvia> {
    const zenvia = new ZenviaModel({
      urlBase: params.urlBase,
      xApiToken: this.crypter.encrypt(params.xApiToken),
    });
    const data = await this.zenviaRepo.save(zenvia);
    return data;
  }
}

type Params = {
  urlBase: string;
  xApiToken: string;
};
