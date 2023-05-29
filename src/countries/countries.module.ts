import { Module } from '@nestjs/common';
import { Country } from './country.entity';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { City } from 'src/cities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
  imports: [TypeOrmModule.forFeature([City, Country])]
})
export class CountriesModule {}
