import { OffersType } from "src/constants/offer.constants";

import {
    IsIn,
    IsInt,
    IsEmail,
    IsString,
    IsObject,
    IsNumber,
    IsBoolean,
    IsOptional,
    IsNotEmpty,
    ArrayMinSize,
    ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";

export class ProviderTpyeDTO {
    @IsString()
    @IsNotEmpty()
    city: string;
  
    @IsString()
    @IsNotEmpty()
    country: string;
}

export class CreateOfferDTO {
    @IsString()
    @IsNotEmpty()
    companyName: string;
  
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsEmail()
    email: string;
  
    @IsIn(Object.keys(OffersType))
    @IsOptional()
    type?: OffersType;
  
    @IsInt()
    @IsNotEmpty()
    experience: number;
  
    @IsNumber()
    salary: number;
  
    @IsString({ each: true })
    @ArrayMinSize(1)
    tags: string[];
  
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
  
    @ValidateNested()
    @IsObject()
    @Type(() => ProviderTpyeDTO)
    location: ProviderTpyeDTO;
}