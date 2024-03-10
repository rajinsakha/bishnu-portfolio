import { IconType } from "react-icons";

export interface iLink{
    title:string;
    path:string;
}

export interface IServiceCard{
    Icon: IconType;
    title:string;
    description:string;
}

export interface IContact{

        fullname: string;
        email: string;
        message: string;

    
}