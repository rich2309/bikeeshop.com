import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = 'componente producto';
  }

  ngOnInit () {}
}
