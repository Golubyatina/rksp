import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/cities/city.entity';
import { Country } from 'src/countries/country.entity';
import { In, Repository } from 'typeorm';
import { CreateCountryDto } from './dto/country.dto';
import { IncompleteCountryDto } from './dto/incomplete-country.dto';
import { Region } from 'src/regions/region.entity';

@Injectable()
export class CountriesService {
    constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>) {}
    
    async create(countryDto: CreateCountryDto): Promise<Country> {
      const country = this.countryRepository.create();
      country.name = countryDto.name;
      country.capital = countryDto.capital;
      country.population = countryDto.population;
      const cities = await this.cityRepository.findBy({
        id: In(countryDto.cities),
      });
      country.cities = cities;
      const regions = await this.regionRepository.findBy({
        id: In(countryDto.regions)
      })
      country.regions = regions
      await this.countryRepository.save(country);
      return country;
  }

  findOne(id: number): Promise<Country> {
      return this.countryRepository.findOne({
        where: {id},
        relations: { cities:true }
      })
    }
    async findIncomplete(): Promise<IncompleteCountryDto[]> {
      const countries = await this.countryRepository.find();
      const incompleteCountries: IncompleteCountryDto[] = countries.map((country) => {
      
        const incompleteCountry = new IncompleteCountryDto();
        incompleteCountry.id = country.id;
        incompleteCountry.capital = country.capital;
        return incompleteCountry;
      });
      return incompleteCountries; 
    }
  
  
    async findAll(): Promise<Country[]> {
      const cities = await this.countryRepository.find({
        relations:{
          cities:true,
          regions:true
        }
      });
      return cities;
    }


    
    async update(id: number, updatedCountry: Country) {
      const country = await this.countryRepository.findOne({ where:{id}});
      country.name = updatedCountry.name
      country.capital = updatedCountry.capital
      country.population = updatedCountry.population
      country.cities = updatedCountry.cities
      country.regions = updatedCountry.regions
      await this.countryRepository.save(country)
      return country;
    }

    remove(id: number) {
      this.countryRepository.delete({id})
    }
  

}