
export class Category {

  private _idCategory: number;
  private _name: string;

  constructor() {}


  get idCategory(): number {
    return this._idCategory;
  }

  set idCategory(value: number) {
    this._idCategory = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
