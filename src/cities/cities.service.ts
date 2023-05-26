import { HttpStatus, Injectable } from '@nestjs/common';
import { City } from 'src/cities/city.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class CitiesService {
    constructor(private readonly datasourceService: DatasourceService) {}
    create(city: City) {
        this.datasourceService.getCities().push(city);
    return city
    }
    findOne(id: number) {
        return this.datasourceService
          .getCities()
          .find((city) => city.id === id);
      }
      findAll(): City[] {
        return this.datasourceService.getCities();
      }
      findAllInCountry(country: string): City[]{
        let cities: City[] = [];
        for (let i of this.datasourceService.getCities())
        {
          if (i.country.name = country)
          {
            cities.push(i);
          }
        }
        return cities;

      }
      update(id: number, updatedCity: City) {
        const index = this.datasourceService
          .getCities()
          .findIndex((city) => city.id === id);
        this.datasourceService.getCities()[index] = updatedCity;
        return this.datasourceService.getCities()[index];
      }
      remove(id: number) {
        const index = this.datasourceService
          .getCities()
          .findIndex((city) => city.id === id);
        this.datasourceService.getCities().splice(index, 1);
        return HttpStatus.OK;
      }
    

}