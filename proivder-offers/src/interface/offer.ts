import { OffersType } from "../constants/offer.constants";

export class Offer {
    companyName: string;
    title: string;
    email: string;
    type: OffersType = OffersType.FULL_TIME;
    experience: number;
    salary: number;
    tags: string[] = [];
    isActive: boolean = true;
    id: number;
}