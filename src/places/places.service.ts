import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/cities/city.entity';
import { Place } from 'src/places/place.entity';
import { In, Repository } from 'typeorm';
import { IncompletePlaceDto } from './dto/incomplete-place.dto';
import { CreatePlaceDto } from './dto/place.dto';


@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>) {}

    async create(placeDto: CreatePlaceDto): Promise<Place> {
      const place = this.placeRepository.create();
      place.name = placeDto.name;
      place.coordinates = placeDto.coordinates;
      place.description = placeDto.description;
      const cities = await this.cityRepository.findBy({
        id: In(placeDto.cities),
      });
      place.cities = cities
      await this.placeRepository.save(place);
      return place;
  }

  findOne(id: number): Promise<Place> {
      return this.placeRepository.findOne({
        where: {id},
        relations: {cities:true}
      })
    }
    async findIncomplete(): Promise<IncompletePlaceDto[]> {
      const places = await this.placeRepository.find(); //получаем массив Place из БД
      const incompletePlaces: IncompletePlaceDto[] = places.map((place) => {
        //преобразуем массив Place в массив IncompletePlaceDto
        const incompletePlace = new IncompletePlaceDto();
        incompletePlace.id = place.id;
        incompletePlace.description = place.description;
        return incompletePlace;
      });
      return incompletePlaces; //возвращаем массив IncompletePlaceDto
    }
  
  
    async findAll(): Promise<Place[]> {
      const cities = await this.placeRepository.find({
        relations:{
          cities:true
        }
      });
      return cities;
    }


    
    async update(id: number, updatedPlace: Place) {
      const place = await this.placeRepository.findOne({ where:{id}});
      place.name = updatedPlace.name
      place.coordinates = updatedPlace.coordinates
      place.description = updatedPlace.description
      place.cities = updatedPlace.cities
      await this.placeRepository.save(place)
      return place;
    }

    remove(id: number) {
      this.placeRepository.delete({id})
    }
  


}