import {Address} from './Address';

export class User {

  private _idUser: number;
  private _name: string;
  private _lastname: string;
  private _adresse: Address;
  private _email: string;

  constructor() {
    this.adresse = new Address();
    this.name = '';
    this.lastname = '';
    this.email = '';
  }


  get idUser(): number {
    return this._idUser;
  }

  set idUser(value: number) {
    this._idUser = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }


  get adresse(): Address {
    return this._adresse;
  }

  set adresse(value: Address) {
    this._adresse = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
