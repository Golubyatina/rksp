import { Injectable } from '@nestjs/common';
import { City } from 'src/cities/city.entity';

@Injectable()
export class DatasourceService {
  private cities: City[] = [];

  getCities(): City[] {
    return this.cities;
  }
}