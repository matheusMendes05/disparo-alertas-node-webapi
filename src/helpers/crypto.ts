import crypto from 'crypto';

const DATA_CRYPT = {
  algorithm: 'aes-256-ocb',
  secret: `${process.env.X_API_KEY}` as string,
  type: 'hex',
};

export function encrypt(senha) {
  const cipher = crypto.createDecipheriv(
    DATA_CRYPT.algorithm,
    DATA_CRYPT.secret,
    DATA_CRYPT.type,
  );
  cipher.update(senha);
  return cipher.final('hex');
}

export function decrypt(senha) {
  const decipher = crypto.createDecipheriv(
    DATA_CRYPT.algorithm,
    DATA_CRYPT.secret,
    DATA_CRYPT.type,
  );
  decipher.update(senha, 'hex');
  return decipher.final();
}
