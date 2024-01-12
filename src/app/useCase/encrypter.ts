export interface IEncrypter {
  encrypt(value: string): Promise<string>;
  compare(velue: string, valueDb: string): Promise<string>;
}
export interface ICrypter {
  encrypt(value: string): any;
  decrypt(value: string): any;
}
