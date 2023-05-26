import { City } from "src/cities/city.entity";

export class Country {
    id: number;
    name: string;
    capital: string;
    population: number;
    cities: City[];
  }
  