import { Component, OnInit } from '@angular/core';
import { Client } from "../data-models";
import {MdDialog} from '@angular/material';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any;

  constructor(public dialog: MdDialog) {
    this.clients = [];
   }

  ngOnInit() {
    this.getClients();
  }

  getClients() {

    let c1 = new Client();
    c1.code = "12345";
    c1.name = "1";
    c1.address = "CALLE JORDAN Nº 280";
    c1.phone = "4505292";

    let c2 = new Client();
    c2.code = "123123";
    c2.name = "MANOLO ALletEZ";
    c2.address = "CALLE JORDAN Nº 280";
    c2.phone = "4505292";

    let c3 = new Client();
    c3.code = "34534534";
    c3.name = "AGENCIA DE VIAJE TODO TURISMO - NORKA";
    c3.address = "CALLE JORDAN Nº 280";
    c3.phone = "4505292";

    let c4 = new Client();
    c4.code = "3453f 45";
    c4.name = "AGENCIA DE VIAJE TODO TURISMO - NORKA";
    c4.address = "CALLE JORDAN Nº 280";
    c4.phone = "4505292";

    let c5 = new Client();
    c5.code = "1231d23";
    c5.name = "MANOLO ALletEZ";
    c5.address = "CALLE JORDAN Nº 280";
    c5.phone = "4505292";

    let c6 = new Client();
    c6.code = "34534dsf534";
    c6.name = "AGENCIA dDE VIAJE TODO TURISMO - NORKA";
    c6.address = "CALLE JORDAN Nº 280";
    c6.phone = "4505292";

    let c7 = new Client();
    c7.code = "3453f45";
    c7.name = "AGENCIdA DE VIAJE TODO TURISMO - NORKA";
    c7.address = "CALLE JORDAN Nº 280";
    c7.phone = "4505292";

    let c8 = new Client();
    c8.code = "3453f 45";
    c8.name = "AGENCIA DE VIAJE TODO TURISMO - NORKA";
    c8.address = "CALLE JORDAN Nº 280";
    c8.phone = "4505292";

    let c9 = new Client();
    c9.code = "1231d23";
    c9.name = "MANOLO ALletEZ";
    c9.address = "CALLE JORDAN Nº 280";
    c9.phone = "4505292";

    let c10 = new Client();
    c10.code = "34534dsf534";
    c10.name = "AGENCIA dDE VIAJE TODO TURISMO - NORKA";
    c10.address = "CALLE JORDAN Nº 280";
    c10.phone = "4505292";

    let c11 = new Client();
    c11.code = "3453f45";
    c11.name = "AGENCIdA DE VIAJE TODO TURISMO - NORKA";
    c11.address = "CALLE JORDAN Nº 280";
    c11.phone = "4505292";

    let c12 = new Client();
    c12.code = "123123";
    c12.name = "MANOLO ALletEZ";
    c12.address = "CALLE JORDAN Nº 280";
    c12.phone = "4505292";

    let c13 = new Client();
    c13.code = "34534534";
    c13.name = "AGENCIA DE VIAJE TODO TURISMO - NORKA";
    c13.address = "CALLE JORDAN Nº 280";
    c13.phone = "4505292";

    let c14 = new Client();
    c14.code = "3453f 45";
    c14.name = "AGENCIA DE VIAJE TODO TURISMO - NORKA";
    c14.address = "CALLE JORDAN Nº 280";
    c14.phone = "4505292";

    let c15 = new Client();
    c15.code = "1231d23";
    c15.name = "MANOLO ALletEZ";
    c15.address = "CALLE JORDAN Nº 280";
    c15.phone = "4505292";

    let c16 = new Client();
    c16.code = "34534dsf534";
    c16.name = "AGENCIA dDE VIAJE TODO TURISMO - NORKA";
    c16.address = "CALLE JORDAN Nº 280";
    c16.phone = "4505292";

    let c17 = new Client();
    c17.code = "3453f45";
    c17.name = "AGENCIdA DE VIAJE TODO TURISMO - NORKA";
    c17.address = "CALLE JORDAN Nº 280";
    c17.phone = "4505292";

    let c18 = new Client();
    c18.code = "3453f 45";
    c18.name = "AGENCIA DE VIAJE TODO TURISMO - NORKA";
    c18.address = "CALLE JORDAN Nº 280";
    c18.phone = "4505292";

    let c19 = new Client();
    c19.code = "1231d23";
    c19.name = "MANOLO ALletEZ";
    c19.address = "CALLE JORDAN Nº 280";
    c19.phone = "4505292";

    let c20 = new Client();
    c20.code = "34534dsf534";
    c20.name = "AGENCIA dDE VIAJE TODO TURISMO - NORKA";
    c20.address = "CALLE JORDAN Nº 280";
    c20.phone = "4505292";

    let c21 = new Client();
    c21.code = "3453f45";
    c21.name = "AGENCIdA DE VIAJE TODO TURISMO - NORKA";
    c21.address = "CALLE JORDAN Nº 280";
    c21.phone = "4505292";

    this.clients.push(c1);
    this.clients.push(c2);
    this.clients.push(c3);
    this.clients.push(c4);
    this.clients.push(c5);
    this.clients.push(c6);
    this.clients.push(c7);
    this.clients.push(c8);
    this.clients.push(c9);
    this.clients.push(c10);
    this.clients.push(c11);
    this.clients.push(c12);
    this.clients.push(c13);
    this.clients.push(c14);
    this.clients.push(c15);
    this.clients.push(c16);
    this.clients.push(c17);
    this.clients.push(c18);
    this.clients.push(c19);
    this.clients.push(c20);
    this.clients.push(c21);
  }

  openDialog() {
    this.dialog.open(AddClientComponentDialog);
  }
}

@Component({
  selector: 'add-client-dialog',
  templateUrl: 'add-client-dialog.html',
})
export class AddClientComponentDialog {}
