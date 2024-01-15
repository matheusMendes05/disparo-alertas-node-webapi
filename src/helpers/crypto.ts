import { ICrypter } from '../app/useCase/encrypter';
import crypto from 'crypto';

export class Crypto implements ICrypter {
  private readonly key = crypto.randomBytes(32);
  private readonly iv = crypto.randomBytes(16);
  private readonly algorithm = 'aes-256-cbc';
  private readonly cypherKey = 'mySecretKey';

  encrypt(value: string) {
    if (!value) return undefined;
    const cipher = crypto.createCipheriv(
      this.algorithm,
      Buffer.from(this.key),
      this.iv,
    );
    let crypted = cipher.update(value, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  }

  decrypt(value: string) {
    const decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      Buffer.from(this.key),
      this.iv,
    );
    let dec = decipher.update(value, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  }
}
