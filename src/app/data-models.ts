// export class Client {
//     // constructor(public code: string; public name: string; public address: string; public phone: string){

//     // }

//     // public _id: string;
//     public code: string;
//     public name: string;
//     // public last_name: string;
//     // public nits: [Nit];
//     public address: string;
//     // public city: string;
//     public phone: string;
//     // public cellphone: string;
//     // public fax: string;
//     // public email: string;
//     // public state: ClientState;
//     // public client_type: ClientType;
//     // public name_nit: string;
//     // public category_client: CategoryClient;
//     // public contract_detail: string;
//     // public lat: string;
//     // public long: string;
//     // public zone: string;
//     // public service: ClientService;
//     location_x:string;
//     location_y:string;
//     controls:[ObjecId]
// }

export class Client {
    _id: string;
    nro: string;
    nrox: string;
    name: string;
    companyName: string;
    nit: string;
    nit2: string;
    nit3: string;
    address: string;
    city: string;
    phone: string;
    fax: string;
    email: string;
    email2: string;
    cellphone: string;
    type: string;
    detail: string;
    state: string;
    register: string;
    fservice: string;
    namenit: string;
    namenit2: string;
    namenit3: string;
    phonework: string;
    contract: string;
    category: string;
    phonehome: string;
    ncontract: string;
    controlt: string;
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
    FOTOCASA: string
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