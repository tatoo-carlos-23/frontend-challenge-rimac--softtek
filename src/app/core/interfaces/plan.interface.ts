export interface IPlan {
    name: string;
    price: number;
    description: string[];
    age: number;
}


export interface IPlanContent {
    list: IPlan[];
}