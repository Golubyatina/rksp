import { Injectable } from '@nestjs/common';
import { City } from 'src/cities/city.entity';
import { Country } from 'src/countries/country.entity';
import { Place } from 'src/places/place.entity';

@Injectable()
export class DatasourceService {
  private cities: City[] = [];
  private countries: Country[] = [];
  private places: Place[] = [];
  getCities(): City[] {
    return this.cities;
  }
  getCountries(): Country[]{
    return this.countries;
  }
  getPlaces(): Place[]{
    return this.places;
  }
}