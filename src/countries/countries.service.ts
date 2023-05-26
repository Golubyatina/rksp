import { HttpStatus, Injectable } from '@nestjs/common';
import { Country } from 'src/countries/country.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class CountriesService {
    constructor(private readonly datasourceService: DatasourceService) {}
    create(country: Country) {
        this.datasourceService.getCountries().push(country);
    return country
    }
    findOne(id: number) {
        return this.datasourceService
          .getCountries()
          .find((country) => country.id === id);
      }
      findAll(): Country[] {
        return this.datasourceService.getCountries();
      }
      update(id: number, updatedCountry: Country) {
        const index = this.datasourceService
          .getCountries()
          .findIndex((country) => country.id === id);
        this.datasourceService.getCountries()[index] = updatedCountry;
        return this.datasourceService.getCountries()[index];
      }
      remove(id: number) {
        const index = this.datasourceService
          .getCountries()
          .findIndex((country) => country.id === id);
        this.datasourceService.getCountries().splice(index, 1);
        return HttpStatus.OK;
      }
    

}