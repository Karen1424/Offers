import { Injectable } from '@nestjs/common';
import { CreateOfferDTO } from 'src/dto/createOffer.dto';
import { Offer } from '../interface/offer'

const JOBS = new Map<number, Offer>();
let offerId = 1;

@Injectable()
export class OfferService {
    createJob(createOfferDTO: CreateOfferDTO | CreateOfferDTO[]) {
        const offer = Object.assign({ ...createOfferDTO, id: ++offerId}, new Offer());
        JOBS.set(offer.id, offer);
        return offerId;
    } 
}
