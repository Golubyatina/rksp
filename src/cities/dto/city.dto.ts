import { Country } from "src/countries/country.entity";

export class CreateCityDto {
    name: string;
    coordinates: string;
    population: number;
    country: Country;
}