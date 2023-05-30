import { Module } from '@nestjs/common';
import { Region } from './region.entity';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from 'src/countries/country.entity';
import { City } from 'src/cities/city.entity';

@Module({
  controllers: [RegionsController],
  providers: [RegionsService],
  imports: [
    TypeOrmModule.forFeature([Region, Country, City])]
})
export class RegionsModule {}
