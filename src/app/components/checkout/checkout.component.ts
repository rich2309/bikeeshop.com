import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { FranceGeoService } from '../../services/rest/france.geo.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../entities/User';
import swal from 'sweetalert2';
import { OrdersService } from '../../services/dao/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [FranceGeoService, OrdersService]
})
export class CheckoutComponent implements OnInit {

  public titleComponent: string;
  public commune_list: Array<any>;
  public user: User;
  public userForm: FormGroup;
  public product_list: Array<any>;
  public product_quantities: Array<any>;
  public total_price: number;

  constructor(
    private _titleService: Title,
    private _franceGeo: FranceGeoService,
    private _formBuilder: FormBuilder,
    private _cookieService: CookieService,
    private _orderService: OrdersService,
    private _router: Router
  ) {
    this.titleComponent = 'Shipment and personal information';
    this.user = new User();
    this.createForm();
    const data_bundle = JSON.parse(this._cookieService.get('order'));
    this.product_list = data_bundle.product_list;
    this.product_quantities = data_bundle.product_quantities;
    this.total_price = Number(data_bundle.total_price);
  }

  createForm(): void {
    this.userForm = this._formBuilder.group({
      name: [this.user.name, Validators.required],
      last_name: [this.user.lastname, Validators.required],
      email: [this.user.email, Validators.email],
      address: this._formBuilder.group({
        postal_code: [this.user.adresse.postal_code, Validators.required],
        commune: [this.user.adresse.commune, Validators.required],
        street: [this.user.adresse.street, Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this._titleService.setTitle(this.titleComponent);
    this.user.adresse.region = [];
    this.user.adresse.department = '';
  }

  loadRegion(codeRegion: string): void {
    this._franceGeo.getRegion(codeRegion).subscribe(
      result => {
        if (result) {
          this.user.adresse.region = result;
        }
      }
    );
  }

  loadDepartment(idDepartement: string): void {
    this._franceGeo.getDepartement(idDepartement).subscribe(
      result => {
        if (result) {
          this.user.adresse.department = result;
        }
      }
    );
  }

  loadCommunes(): void {
    const form = this.userForm.value;
    this._franceGeo.getCommunes(form.address.postal_code).subscribe(
      result => {
        if (result.length < 1) {
          this.notFound();
        } else {
          this.commune_list = result;
          const codeRegion = this.commune_list[0].codeRegion;
          const codeDepartment = this.commune_list[0].codeDepartement;
          this.loadDepartment(codeDepartment);
          this.loadRegion(codeRegion);
        }
      }
    );
  }

  notFound() {
    this.commune_list = null;
    this.user.adresse.department = null;
    this.user.adresse.region = null;
    swal({
      title: 'Without results',
      html: 'Please verify if the postal code <b>' + this.user.adresse.postal_code + '</b> is correct.',
      type: 'error'
    });
  }

  onSubmit(): void {
    swal({
      title: 'Confirm your payment?',
      type: 'question',
      text: 'Your order will be sent to the address you have submitted',
      showCancelButton: true,
      confirmButtonText: 'Pay now',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.value) {

        const params = {
          product_list: this.product_list,
          product_quantities: this.product_quantities,
          user: this.user,
          total_price: this.total_price
        };

        this._orderService.makeOrder(params).subscribe(
          response => {
            if (response.rows_inserted === this.product_list.length) {
              swal({
                type: 'success',
                title: 'Payment received',
                confirmButtonText: 'Go to home page',
                html: 'You will receive your confirmation by email in a few minutes (Not really, but that would be great!)'
              }).then((confirm) => {
                if (confirm.value) {
                  this._router.navigate(['']);
                }
              });
              this._cookieService.delete('order');
              this._cookieService.delete('shopping_cart');
              this._cookieService.delete('product_quantities');
              this.userForm.reset();
              this.commune_list = null;
            } else {
              swal({
                type: 'error',
                title: 'Payment rejected',
                confirmButtonText: 'Go to home page',
                html: 'There is an error to proceed with your payment.<br>' +
                'This would be due to insufficient products in stock or failures in your internet connexion'
              });
            }
          }
        );
      }
    });
  }
}
