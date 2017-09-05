import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Client } from "../data-models";
import { API_URLs } from '../config';
import { Observable } from 'rxjs/Observable';

let clientsUrl = API_URLs.clientsApiUrls.clients;
let clientsFilterSizeUrl = API_URLs.clientsApiUrls.clientsFilterSize;
let filterUrl = API_URLs.clientsApiUrls.clientsFilter;


@Injectable()
export class ClientService {
    headers = new Headers({});
    options = new RequestOptions();

    constructor(private http: Http) {
        // this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append("Content-Type", "application/json");
        this.options.headers = this.headers;
    }

    /**
     * Gets all clients from the Database.
     */
    getClients(): Observable<Client[]> {
        return this.http.get(clientsUrl)
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    updateClient(client: Client) {
        let body = JSON.stringify(client);
        return this.http.patch(clientsUrl + "/" + client._id, body, this.options)
            .map((res: Response) => {
                return res.json();
            })
    }

    /**
     * Adds the new client in the Database.
     * 
     * @param client The new Client to be added.
     */
    addClient(client: Client) {
        //Adding the new client into the body
        let body = JSON.stringify(client);
        return this.http.post(clientsUrl, body, this.options)
            .map((res: Response) => {
                return res.json();
            })
    }

    /**
     * Gets the filter list based an a criteria (Query) .
     * 
     * @param filterQuery The query to get the filter list.
     */
    getFilterList(filterQuery): Observable<Client[]> {
        let body = JSON.stringify(filterQuery);
        return this.http.post(filterUrl, body, this.options)
            .map((res: Response) => {
                return res.json();
            })
    }

    /**
     * Gets the amount to the filter list.
     * 
     * @param textTotSearch Criteria to get the amount of a filter list.
     */
    getFilterLength(textTotSearch) {
        let headers = new Headers();
        let body = JSON.stringify(textTotSearch);
        return this.http.post(clientsFilterSizeUrl, body, this.options)
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    /**
     * Gets the client from the Database by id.
     * 
     * @param id Id to find the client.
     */
    getClient(id): Observable<Client> {
        return this.http.get(clientsUrl + "/" + id).
            map((res: Response) => res.json()).
            catch(this.handleError);
    }

    /**
     * Gets the enums that contain the Client model from the Database.
     */
    getClientEnums() {
        return this.http.get(clientsUrl + "/" + "enums").
        map((res: Response) => res.json()).
        catch(this.handleError);
    }

    /**
     * Handles the error in the request.
     * 
     * @param error Error.
     */
    private handleError(error: any) {
        console.error('Client service request server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }
}
