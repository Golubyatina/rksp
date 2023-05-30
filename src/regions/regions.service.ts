import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/countries/country.entity';
import { City } from 'src/cities/city.entity';
import { In, Repository } from 'typeorm';
import { CreateRegionDto } from './dto/region.dto';
import { IncompleteRegionDto } from './dto/incomplete-region.dto';
import { Region } from './region.entity';
import { SwaggerModule } from '@nestjs/swagger';
import { log } from 'console';

@Injectable()
export class RegionsService {
    constructor(
      @InjectRepository(Region)
      private readonly regionRepository: Repository<Region>,
      @InjectRepository(Country)
      private readonly countryRepository: Repository<Country>,
      @InjectRepository(City)
      private readonly cityRepository: Repository<City>) {}

    async create(regionDto: CreateRegionDto): Promise<Region> {
        const region = this.regionRepository.create();
        region.name = regionDto.name;
        region.coordinates = regionDto.coordinates;
        const capital = await this.cityRepository.findOne({
            where:{
                id:regionDto.capital
            }
        })
        region.capital = capital.name;
        const country = await this.countryRepository.findOne({
            where:{
                id:regionDto.country
            },
        });
        region.country = country;
        await this.regionRepository.save(region);
        return region;
    }

    findOne(id: number): Promise<Region> {
        return this.regionRepository.findOne({
          where: {id},
          relations: {country: true, cities:true }
        })
      }
      async findIncomplete(): Promise<IncompleteRegionDto[]> {
        const regions = await this.regionRepository.find();
        const incompleteRegions: IncompleteRegionDto[] = regions.map((region) => {

          const incompleteRegion = new IncompleteRegionDto();
          incompleteRegion.id = region.id;
          incompleteRegion.name = region.name;
          incompleteRegion.coordinates = region.coordinates;
          return incompleteRegion;
        });
        return incompleteRegions;
      }
    
    
      async findAll(): Promise<Region[]> {
        const regions = await this.regionRepository.find({
          relations:{
            country:true,
            cities:true
          }
        });
        return regions;
      }

/*      async ShowPopulation(regionid: number):Promise<number>{
        const region = await this.regionRepository.findOne({
            where:{id:regionid}
        })
        let population = 0
        for (let i of region.cities){
            population += i.population
            log(population)
        }
        return population
     }*/
      
      async update(id: number, updatedRegion: Region) {
        const region = await this.regionRepository.findOne({ where:{id}});
        region.name = updatedRegion.name
        region.coordinates = updatedRegion.coordinates
        region.capital = updatedRegion.capital
        region.country = updatedRegion.country
        region.cities = updatedRegion.cities
        await this.regionRepository.save(region)
        return region;
      }

      remove(id: number) {
        this.regionRepository.delete({id})
      }
    

}