
export class Address {

  private _postal_code: string;
  private _region: any;
  private _department: any;
  private _commune: string;
  private _street: string;

  constructor() {
    this.postal_code = '';
    this.region = '';
    this.department = '';
    this.commune = '';
    this.street = '';
  }


  get postal_code(): string {
    return this._postal_code;
  }

  set postal_code(value: string) {
    this._postal_code = value;
  }

  get region(): any {
    return this._region;
  }

  set region(value: any) {
    this._region = value;
  }

  get department(): any {
    return this._department;
  }

  set department(value: any) {
    this._department = value;
  }

  get commune(): string {
    return this._commune;
  }

  set commune(value: string) {
    this._commune = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }
}
