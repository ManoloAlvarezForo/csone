import { Component, OnInit } from '@angular/core';
import { Client } from "../data-models";
import {MdDialog} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ClientService } from "../client/client.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  clients: Observable<Client[]>;

  constructor(public dialog: MdDialog, private clientService: ClientService) {}

  ngOnInit() {
    this.clients = this.clientService.getClients();
  }

  openAddClientDialog() {
    this.dialog.open(AddClientComponentDialog);
  }
}

@Component({
  selector: 'add-client-dialog',
  templateUrl: 'add-client-dialog.html',
})
export class AddClientComponentDialog {}
