import { Component,Input, OnInit } from '@angular/core';
import { Client } from "../data-models";
import { ClientService } from "./client.service";
import { MdDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @Input() client: Client;
  tempClient: Client;
  private id: any;
  title = 'Nuevo Cliente';
  //localization config end
  initWorkDate;
  phoneTypeSelected;
  isEditMode = true;
  selectedCategory: string;
  selectedCity: string;
  selectedState: string;
  favoriteSeason: string;
  phoneNumber:string;
  phone = {number:'', type: {type:'', typeIcon: 'phone_iphone', color:'orange'}};
  nitNameValue = '';
  nitNumberValue = '';
  phones = []
  nits: any;

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  categoryTypes = [
    // { value: 'comercial', viewValue: 'Comercial' },
    // { value: 'residencial', viewValue: 'Residencial' }
  ];

  states = [
    { value: 'activo', viewValue: 'Activo' },
    { value: 'inactivo', viewValue: 'Inactivo' }
  ];

  cityTypes = [];

  phoneTypes = [];

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  constructor(public dialog: MdDialog, 
    private clientService: ClientService, 
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.phones = [];
    this.nits = [];
    this.initDefaultValues();
    
  }

  ngOnInit() {
      this.tempClient = new Client();
      this.id = this.route.snapshot.params['id'];
      this.getClient(this.id)
  }

  enableEditMode() {
    this.isEditMode = true;
  }

  disableEditMode() {
    this.isEditMode = false;
    this.getClient(this.id);
  }

  initDefaultValues(): void {
    this.clientService.getClientEnums()
    .subscribe(enums => {
      this.categoryTypes = enums["categoryTypes"]
      this.cityTypes = enums["cityTypes"]
      this.phoneTypes = enums["phoneTypes"]
    },
    error => {
      console.log('error occurred here');
      console.log(error);
    },
     () => {
      console.log('vehicle retrieval completed');
    });
  }

  getClient(id) {
    this.clientService.getClient(id)
      .subscribe(client => {
        this.client = client;
        this.tempClient = this.client;
        this.buildTempData();
        this.isEditMode = false;
      },
      error => {
        console.log('error occurred here');
        console.log(error);
      },
       () => {
        console.log('vehicle retrieval completed');
      });
  }

  saveOrUpdateClient() {
    if(!this.tempClient._id) {
      this.clientService.addClient(this.tempClient).
      subscribe(client => {
        this.id = client._id;
        this.getClient(this.id);
        this.router.navigate(['/main/clients/', client._id]);
      });
    } else {
      this.clientService.updateClient(this.tempClient).
      subscribe(res => {
        this.getClient(this.id);
      });
    }

    
  }

  buildTempData() {
    this.nits = this.client.nits;
    this.title = this.tempClient.name;
    
  }

  /**
   * Adds the phone in the client edit or new based in the this.phone.number variable.
   */
  addPhone() {
    this.phone.number = this.phoneNumber;
    this.phones.unshift(this.phone);
    this.phoneNumber = '';
    this.phone = {number:'', type: {type:'', typeIcon: 'phone_iphone', color:'orange'}};
    this.clearPhoneFields();
  }

  /**
   * Sets the current phone variable selected or edited.
   * 
   * @param phone Current phone value selected or edited.
   */
  setCurrentPhone(phone) {
    this.phone = phone;
    this.clearPhoneFields();
  }

  /**
   * Removes the current phone selected or edited.
   * 
   * @param phone Current phone selected or edited
   */
  removePhone(phone) {
    let indexPhone = this.phones.indexOf(phone);
    this.phones.splice(indexPhone, 1);
    this.phoneTypeSelected = ""
  }

  clearPhoneFields() {
    this.phoneTypeSelected = "";
    this.phoneNumber = "";    
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
    let indexNit = this.tempClient.nits.indexOf(nit);
    this.tempClient.nits.splice(indexNit, 1);
  }

   openAddLocationDialog() {
    this.dialog.open(AddLocationComponentDialog);
  }

  
}

@Component({
  selector: 'add-location-dialog',
  templateUrl: 'add-location-dialog.html',
  styleUrls: ['./client.component.css']
})
export class AddLocationComponentDialog { 
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
}

