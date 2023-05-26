import { HttpStatus, Injectable } from '@nestjs/common';
import { Place } from 'src/places/place.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class PlacesService {
    constructor(private readonly datasourceService: DatasourceService) {}
    create(place: Place) {
        this.datasourceService.getPlaces().push(place);
    return place
    }
    findOne(id: number) {
        return this.datasourceService
          .getPlaces()
          .find((place) => place.id === id);
      }
      findAll(): Place[] {
        return this.datasourceService.getPlaces();
      }
      update(id: number, updatedPlace: Place) {
        const index = this.datasourceService
          .getPlaces()
          .findIndex((place) => place.id === id);
        this.datasourceService.getPlaces()[index] = updatedPlace;
        return this.datasourceService.getPlaces()[index];
      }
      remove(id: number) {
        const index = this.datasourceService
          .getPlaces()
          .findIndex((place) => place.id === id);
        this.datasourceService.getPlaces().splice(index, 1);
        return HttpStatus.OK;
      }
    

}