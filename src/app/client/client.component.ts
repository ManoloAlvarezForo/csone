import { Component, OnInit } from '@angular/core';
import { Client } from "../data-models";
import { ClientService } from "./client.service";


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  // localization
  title: string = 'Direccion';
  lat: number = -17.3664146;
  lng: number = -66.1748227;
  zoom: number = 15;
  marker = {
    lat: 0,
    lng: 0,
    label: 'Nro: 2345 puerta roja',
    draggable: true
  }
  //localization config end
  client: Client;
  selectedCategory: string;
  selectedCity: string;
  selectedState: string;
  favoriteSeason: string;
  phoneNumber:string;
  phone = {number:'', type: {type:'', typeIcon: 'phone_iphone', color:'orange'}};
  nitNameValue = '';
  nitNumberValue = '';
  phones = []
  nits = []

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

  phoneTypes = [
    {type: 'Casa', typeIcon:'home', color:'green'},
    {type: 'Trabajo', typeIcon:'business', color:'blue'},
    {type: 'Mobil', typeIcon:'phone_iphone', color:'orange'}
  ]

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  constructor(private clientService: ClientService) { 
    this.phones = [];
    this.nits = [];
  }

  //maps
  mapClicked($event) {
    this.marker.lat = $event.coords.lat;
    this.marker.lng = $event.coords.lng;
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markerDragEnd(marker, $event: MouseEvent) {
    console.log('dragEnd', marker, $event);
  }
  

  getClient(id) {
    this.clientService.getClient(id)
      .subscribe(client => {
        this.client  = client;
      },
      error => {
        console.log('error occurred here');
        console.log(error);
      },
       () => {
        console.log('vehicle retrieval completed');
      });
  }

  ngOnInit() {
  }

  /**
   * Adds the phone in the client edit or new based in the this.phone.number variable.
   */
  addPhone() {
    this.phone.number = this.phoneNumber;
    this.phones.unshift(this.phone);
    this.phoneNumber = '';
    this.phone = {number:'', type: {type:'', typeIcon: 'phone_iphone', color:'orange'}};
  }

  /**
   * Sets the current phone variable selected or edited.
   * 
   * @param phone Current phone value selected or edited.
   */
  setCurrentPhone(phone) {
    this.phone = phone;
  }

  /**
   * Removes the current phone selected or edited.
   * 
   * @param phone Current phone selected or edited
   */
  removePhone(phone) {
    let indexPhone = this.phones.indexOf(phone);
    this.phones.splice(indexPhone, 1);
  }

  /**
   * Sets the phone type to the current phone variable.
   * 
   * @param phoneType The phone type to be added to the current phone.
   */
  setPhoneType(phoneType) {
    this.phone.type = phoneType;
    this.phone = {number:'', type: {type:'', typeIcon: 'phone_iphone', color:'orange'}};
  }

  /**
   * Adds the nit selected in the field to the nits list.
   */
  addNit() {
    this.nits.unshift({name: this.nitNameValue, number: this.nitNumberValue});
    this.nitNameValue = '';
    this.nitNumberValue = '';
  }

  /**
   * Removes the current nit selected and received like a parameter.
   * 
   * @param nit Current nit selected.
   */
  removeNit(nit) {
    let indexNit = this.nits.indexOf(nit);
    this.nits.splice(indexNit, 1);
  }

  
}
