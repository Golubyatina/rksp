import { Module } from '@nestjs/common';
import { City } from './city.entity';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from 'src/countries/country.entity';
import { Place } from 'src/places/place.entity';
import { Region } from 'src/regions/region.entity';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [
    TypeOrmModule.forFeature([City, Country, Place, Region])]
})
export class CitiesModule {}
