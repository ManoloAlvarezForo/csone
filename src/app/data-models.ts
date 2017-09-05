export class Client {
    _id: string;
    nro: string;
    nrox: string;
    name: string;
    companyName: string;
    nits: object[];
    emails: string[];
    phones: Phone[];
    address: string;
    city: object;
    location: object[];
    type: string;
    detail: string;
    state: string;
    register: string;
    fservice: string;
    contract: string;
    category: object;
    ncontract: string;
    controls: string[];
    shownit: string;
    contractname: string;
    new: string;
    modify: string;
    delete: string;
    groups: string;
    renew: string;
    client: string;
    charla: string;
    recomienda: string;
    bank: string;
    LATITUD: string;
    LONGITUD: string;
    ZONA: string;
    TIPOCLI: string;
    FOTOCASA: string;
}

export class Location {
    lat: number;
    lng: number;
    zoom: number;
}

export class Nit {
    name: string;
    nit_number: string;
}

export class Phone {
    number: string;
    phonetype: PhoneType
}

export enum CategoryType {
    'Residencial',
    'Comercial'
}

export enum City { 
    'La Paz', 
    'Cochabamba',
    'Santa Cruz',
    'Sucre',
    'Tarija', 
    'Oruro', 
    'Pando', 
    'Beni',
    'Potosi'
}

export enum PhoneType {
    'Casa',
    'Trabajo',
    'Celular',
    'Fax',
    'Otro'
}

export class ClientCategory {
    _id: string;
    category_code:number;
    type: string;
}

//When: client_id is an ObjectId in mongodb
//When: workers contains a ObjectId's list of employes

export class Control {
    _id: string;
    creation_date:Date;
    month_code: string;
    code_control: string
    client_id:string;
    date_work:string;
    category: string;
    workers:[ObjecId];
    pay:ObjecId;
    price:number;
    isDone:boolean;
}

export class Employ {
    _id:string;
    creation_date:Date;
    worker_code: string;
    name: string;
    last_name:string;
    address: string;
    phone: string;
    cellphone: string;
    contract_day:string;
    date_bird: string;
}

export class EmployRule {
    _id:string;
    technical:number;
    office:number;
}

export class ControlType {
    _id:string;
    name:string;
    control_type_code:string;
}

export class User {
    _id:string;
    user_code:string;
    name:string;
    last_name:string;
}

export class UserRule {
    _id:string;
    admin:string;
    guess_user:string;
    default_user:string;
}

export class Pay {
    _id:string;
    amount:number;
    isCompleted:boolean;
    date:Date;
}

export class ObjecId {

}

export class Call {
    _id:string;
    call_description:string;
    client: ObjecId;
}