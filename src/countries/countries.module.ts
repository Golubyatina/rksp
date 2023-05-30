import { Module } from '@nestjs/common';
import { Country } from './country.entity';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { City } from 'src/cities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from 'src/regions/region.entity';

@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
  imports: [TypeOrmModule.forFeature([City, Country, Region])]
})
export class CountriesModule {}
