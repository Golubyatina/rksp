import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/cities/city.entity';
import { Country } from 'src/countries/country.entity';
import { Place } from 'src/places/place.entity';
import { In, Repository } from 'typeorm';
import { CreateCityDto } from './dto/city.dto';
import { IncompleteCityDto } from './dto/incomplete-city.dto';
import { Region } from 'src/regions/region.entity';

@Injectable()
export class CitiesService {
    constructor(
      @InjectRepository(City)
      private readonly cityRepository: Repository<City>,
      @InjectRepository(Country)
      private readonly countryRepository: Repository<Country>,
      @InjectRepository(Place)
      private readonly placeRepository: Repository<Place>,
      @InjectRepository(Region)
      private readonly regionRepository: Repository<Region>) {}

    async create(cityDto: CreateCityDto): Promise<City> {
        const city = this.cityRepository.create();
        city.name = cityDto.name;
        city.coordinates = cityDto.coordinates;
        city.population = cityDto.population;
        const country = await this.countryRepository.findBy({
          id: In(cityDto.country),
        });
        city.country = country;
        const region = await this.regionRepository.findBy({
          id: In(cityDto.region),
        })
        city.region = region;
        await this.cityRepository.save(city);
        return city;
    }

    findOne(id: number): Promise<City> {
        return this.cityRepository.findOne({
          where: {id},
          relations: {country: true, places:true, region:true }
        })
      }
      async findIncomplete(): Promise<IncompleteCityDto[]> {
        const cities = await this.cityRepository.find();
        const incompleteCitys: IncompleteCityDto[] = cities.map((city) => {
          const incompleteCity = new IncompleteCityDto();
          incompleteCity.id = city.id;
          incompleteCity.coordinates = city.coordinates;
          return incompleteCity;
        });
        return incompleteCitys
      }
    
    
      async findAll(): Promise<City[]> {
        const cities = await this.cityRepository.find({
          relations:{
            country:true,
            places:true,
            region:true
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
        city.region = updatedCity.region
        await this.cityRepository.save(city)
        return city;
      }

      remove(id: number) {
        this.cityRepository.delete({id})
      }
    

}