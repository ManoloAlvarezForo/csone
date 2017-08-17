import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Client } from "../client/client";
import { CONFIG } from '../config';
import { Observable } from 'rxjs/Observable';

let clientsUrl = CONFIG.baseUrls.clients;


@Injectable()
export class ClientService {
  constructor(private http: Http) { }

  getClient(code: string) {
    return this.getClients()
      .map(clients => clients.find(client => client.code === code));
  }

  getClients(): Observable<Client[]> {
    return this.http
      .get(clientsUrl)
      .map((response: Response) => <Client[]>response.json().clients);
  }
}
