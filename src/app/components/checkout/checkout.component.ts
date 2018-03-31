import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { FranceGeoService } from '../../services/rest/france.geo.service';
import { User } from '../../entities/User';
import swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [FranceGeoService]
})
export class CheckoutComponent implements OnInit {

  public titleComponent: string;
  public commune_list: Array<any>;
  public user: User;
  public userForm: FormGroup;

  constructor(
    private _titleService: Title,
    private _franceGeo: FranceGeoService,
    private _formBuilder: FormBuilder
  ) {
    this.titleComponent = 'Shipment and personal information';
    this.user = new User();
    this.createForm();
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
    console.log(this.userForm.status);
  }
}
