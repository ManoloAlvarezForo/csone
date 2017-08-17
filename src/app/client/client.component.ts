import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  selectedCategory: string;
  selectedCity: string;
  selectedState: string;
  favoriteSeason: string;
  phoneValue = '';
  phones = []

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  categorys = [
    { value: 'comercial', viewValue: 'Comercial' },
    { value: 'residencial', viewValue: 'Residencial' }
  ];

  states = [
    { value: 'activo', viewValue: 'Activo' },
    { value: 'inactivo', viewValue: 'Inactivo' }
  ];

  citys = [
    { value: 'La Paz', viewValue: 'La Paz'},
    { value: 'Cochabamba', viewValue: 'Cochabamba'},
    { value: 'Santa Cruz', viewValue: 'Santa Cruz'},
    { value: 'Chuquisaca', viewValue: 'Chuquisaca'},
    { value: 'Oruro', viewValue: 'Oruro'},
    { value: 'Potosi', viewValue: 'Potosi'},
    { value: 'Beni', viewValue: 'Beni'},
    { value: 'Tarija', viewValue: 'Tarija'},
    { value: 'Pando', viewValue: 'Pando'}
  ]

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  addPhone() {
    this.phones.push({number: this.phoneValue});
    this.phoneValue = '';
  }

  removePhone(phone) {
    let indexPhone = this.phones.indexOf(phone);
    this.phones.splice(indexPhone, 1);
  }

  constructor() { 
    this.phones = [];
  }
  ngOnInit() {
  }
}
