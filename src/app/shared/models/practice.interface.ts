export interface Istd{
    userdata: {
        username: string;
        email: string;
    }
    modecontact: string;
    contact: number;
    secreatequestion: string;
    answer: string;
    subsribed: boolean;
}

export interface IcontactModeArr{
    moc: string;
    id: number;
}

export interface Imobile{
    id: number;
    name: string;
    brand: string;
    price: number;
    Oprice:number;
    Disscount:string;
    Delivery:string;
    Bank:string;
    image: string;
    isAvailable: boolean;
    rating: number;
    specifications: string[];
    stock:string;
    status:boolean;
    
}