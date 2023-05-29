import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/cities/city.entity';
import { Country } from 'src/countries/country.entity';
import { Place } from 'src/places/place.entity';
import { In, Repository } from 'typeorm';
import { CreateCityDto } from './dto/city.dto';
import { IncompleteCityDto } from './dto/incomplete-city.dto';

@Injectable()
export class CitiesService {
    constructor(
      @InjectRepository(City)
      private readonly cityRepository: Repository<City>,
      @InjectRepository(Country)
      private readonly countryRepository: Repository<Country>,
      @InjectRepository(Place)
      private readonly placeRepository: Repository<Place>) {}

    async create(cityDto: CreateCityDto): Promise<City> {
        const city = this.cityRepository.create();
        city.name = cityDto.name;
        city.coordinates = cityDto.coordinates;
        city.population = cityDto.population;
        const country = await this.countryRepository.findBy({
          id: In(cityDto.country),
        });
        city.country = country;
        await this.cityRepository.save(city);
        return city;
    }

    findOne(id: number): Promise<City> {
        return this.cityRepository.findOne({
          where: {id},
          relations: {country: true, places:true }
        })
      }
      async findIncomplete(): Promise<IncompleteCityDto[]> {
        const citys = await this.cityRepository.find(); //получаем массив City из БД
        const incompleteCitys: IncompleteCityDto[] = citys.map((city) => {
          //преобразуем массив City в массив IncompleteCityDto
          const incompleteCity = new IncompleteCityDto();
          incompleteCity.id = city.id;
          incompleteCity.coordinates = city.coordinates;
          return incompleteCity;
        });
        return incompleteCitys; //возвращаем массив IncompleteCityDto
      }
    
    
      async findAll(): Promise<City[]> {
        const cities = await this.cityRepository.find({
          relations:{
            country:true,
            places:true
          }
        });
        return cities;
      }


      
      async update(id: number, updatedCity: City) {
        const city = await this.cityRepository.findOne({ where:{id}});
        city.name = updatedCity.name
        city.coordinates = updatedCity.coordinates
        city.population = updatedCity.population
        city.country = updatedCity.country
        city.places = updatedCity.places
        await this.cityRepository.save(city)
        return city;
      }

      remove(id: number) {
        this.cityRepository.delete({id})
      }
    

}