import { IEncrypter } from '../app/useCase/encrypter';
import bcrypt from 'bcrypt';

export class Encrypter implements IEncrypter {
  private readonly salt: number;

  constructor(salt: number) {
    this.salt = salt;
  }

  async encrypt(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt);
    return hash;
  }

  compare(velue: string, valueDb: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
