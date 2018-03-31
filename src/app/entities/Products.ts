
export class Products {

  private _idProduct: number;
  private _name: string;
  private _price: number;
  private _description: string;
  private _short_description: string;
  private _url_img: string;
  private _quantity: number;
  private _id_category: number;


  constructor(idProduct: number, name: string, price: number, description: string, short_description: string, _url_img: string, id_category: number) {
    this._idProduct = idProduct;
    this._name = name;
    this._price = price;
    this._description = description;
    this._short_description = short_description;
    this._url_img = _url_img;
    this._id_category = id_category;
  }

  get idProduct(): number {
    return this._idProduct;
  }

  set idProduct(value: number) {
    this._idProduct = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get short_description(): string {
    return this._short_description;
  }

  set short_description(value: string) {
    this._short_description = value;
  }


  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get url_img(): string {
    return this._url_img;
  }

  set url_img(value: string) {
    this._url_img = value;
  }

  get id_category(): number {
    return this._id_category;
  }

  set id_category(value: number) {
    this._id_category = value;
  }
}
