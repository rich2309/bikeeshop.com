
export  class DescriptionOrderder {

  private _idDescriptionOrder: number;
  private _idOrder: number;
  private _idProduct: number;
  private _quantity: number;

  constructor() {}


  get idDescriptionOrder(): number {
    return this._idDescriptionOrder;
  }

  set idDescriptionOrder(value: number) {
    this._idDescriptionOrder = value;
  }

  get idOrder(): number {
    return this._idOrder;
  }

  set idOrder(value: number) {
    this._idOrder = value;
  }

  get idProduct(): number {
    return this._idProduct;
  }

  set idProduct(value: number) {
    this._idProduct = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }
}
