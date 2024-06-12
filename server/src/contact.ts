import * as mongodb from "mongodb";

export interface Contacts {
    name: string;
    Phone: number;
    email: string;
    _id?: mongodb.ObjectId;
}