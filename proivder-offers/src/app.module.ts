import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersController } from './offers/offers.controller';
import { OfferService } from './offer-service/offer-service';

@Module({
  imports: [],
  controllers: [AppController, OffersController],
  providers: [AppService, OfferService],
})
export class AppModule {}
